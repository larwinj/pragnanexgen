import { Link } from 'react-router-dom'

// Renders `text`, turning the first occurrence of `link.text` into a router link.
export default function LinkedText({ text, link, linkClassName = '' }) {
  const at = link ? text.indexOf(link.text) : -1
  if (at === -1) return text
  return (
    <>
      {text.slice(0, at)}
      <Link to={link.to} className={`font-semibold underline decoration-2 underline-offset-4 ${linkClassName}`}>
        {link.text}
      </Link>
      {text.slice(at + link.text.length)}
    </>
  )
}
