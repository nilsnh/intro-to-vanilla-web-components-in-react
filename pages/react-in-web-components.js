import Head from 'next/head'
import dynamic from 'next/dynamic'
import Example from '../components/example'

const KindOfArmored = dynamic(() => import('../components/kindOfArmored'), {
  ssr: false,
})

export default function WCInReact() {
  const pageTitle = 'React komponenter i Web komponenter'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <p>Så kva med React inni web komponenter?</p>
      <Example title="React portal + web komponent">
        <KindOfArmored>
          <p>Eit stykke React innhald inni ein web component.</p>
        </KindOfArmored>
      </Example>
    </>
  )
}
