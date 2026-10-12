import { useEffect } from 'react'
import { getPageMeta, renderHeadTags } from './meta'

// Keeps <head> in sync with the current route during client-side navigation.
// The prerendered HTML already contains the same tags for the first load.
export default function usePageMeta(pathname) {
  useEffect(() => {
    const head = document.head
    head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    head.insertAdjacentHTML('beforeend', renderHeadTags(getPageMeta(pathname)))
  }, [pathname])
}
