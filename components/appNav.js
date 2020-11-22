import Link from 'next/link'

export default function AppNav() {
  const links = {
    '/': 'Start',
    '/overblikk': 'Overblikk',
    '/web-components-in-react': 'Web komponenter i React',
    '/react-in-web-components': 'React komponenter i Web komponenter',
  }
  return (
    <nav>
      <ol>
        {Object.entries(links).map(([url, title]) => (
          <li key={url}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
