import Head from 'next/head'

export default function Home() {
  const pageTitle =
    'Intro til web komponenter i React komponenter: Korleis og kvifor?'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <p>
        Om du saumfarer React dokumentasjonen lengje nok så finn du til slutt ei
        side som snakker om korleis React komponenter kan samhandle med web
        komponenter. Men kvifor er det ønskeleg? Om du lurer på det så er dette
        rette staden å vere! I dette foredraget vil eg gi ein intro til web
        komponenter i kontekst av React, og snakke om når dei passer inn, når
        dei kjem til kort og korleis framtida til denne teknologien ser ut.
      </p>
      <p>
        Nils Norman Haukås er interaksjonsdesigner av utdanning og utvikler av
        praksis. Til dagleg jobber han som teknolog ved Netlife Bergen og er
        ekstra nøgd om han kan slette meir kode enn det han skriv. På fritida
        blogger han om teknologi og samfunn på{' '}
        <a href="https://nilsnh.no">nilsnh.no</a>.
      </p>
    </>
  )
}
