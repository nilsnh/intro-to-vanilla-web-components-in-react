import Head from 'next/head'
import dynamic from 'next/dynamic'
import Counter from '../components/counter'

const ChillCounter = dynamic(() => import('../components/chill-counter'), {
  ssr: false,
})

export default function WCInReact() {
  const pageTitle = 'Web komponenter i React'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <p>La oss sjå på nokre web komponenter.</p>
      <Example title="React teller">
        <Counter />
      </Example>
      <Example title="Web komponent teller">
        <ChillCounter />
      </Example>
    </>
  )
}

function Example({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <style jsx>{`
        h2 {
          margin: 0;
        }
        section {
          border: 3px solid var(--moz-green);
          padding: var(--spacing-small);
          margin-bottom: var(--spacing);
        }
      `}</style>
    </section>
  )
}
