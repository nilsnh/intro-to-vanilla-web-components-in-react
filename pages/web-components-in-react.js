import Head from 'next/head'
import Counter from '../components/counter'
import WebComponentLoader from '../components/webComponentLoader'
import Example from '../components/example'

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
        <WebComponentLoader load={['chill-counter']}>
          <chill-counter />
        </WebComponentLoader>
      </Example>
      <Example title="Web komponent teller V2">
        <WebComponentLoader load={['chill-counter-v2']}>
          <chill-counter-v2 />
        </WebComponentLoader>
      </Example>
    </>
  )
}
