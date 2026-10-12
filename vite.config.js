import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createVisitorStore, handleVisitors } from './server/lib/visitorCounter.js'

/**
 * Serve `/api/visitors` from `vite dev` and `vite preview` with the same handler as
 * the Vercel function, so the footer counter works without the Express server.
 * Registered before Vite's proxy, so other `/api/*` routes (contact form) are still
 * proxied to the Express server (`npm start`).
 */
function visitorApi(env) {
  const store = createVisitorStore(env)
  if (!store) console.info('[visitors] Upstash not configured in .env — footer counter hidden locally.')

  const middleware = async (req, res, next) => {
    if (req.url?.split('?')[0] !== '/api/visitors') return next()
    try {
      if (req.method === 'POST') {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        req.body = Buffer.concat(chunks).toString('utf8')
      }
      // Express-style helpers expected by handleVisitors
      res.status = (code) => {
        res.statusCode = code
        return res
      }
      res.json = (body) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(JSON.stringify(body))
        return res
      }
      await handleVisitors(req, res, store)
    } catch (err) {
      next(err)
    }
  }

  return {
    name: 'visitor-api',
    configureServer: (server) => void server.middlewares.use(middleware),
    configurePreviewServer: (server) => void server.middlewares.use(middleware),
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), visitorApi(loadEnv(mode, process.cwd(), ''))],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
}))
