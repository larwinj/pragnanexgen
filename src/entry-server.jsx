// Build-time render entry used by scripts/prerender.mjs (never shipped to the browser).
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export { routes } from './data/routes'
export { getPageMeta, renderHeadTags, SEO_LIMITS } from './seo/meta'
export { company } from './data/site'

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  )
}
