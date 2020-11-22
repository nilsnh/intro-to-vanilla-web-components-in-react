import Head from 'next/head'

export default function Overview() {
  const pageTitle = 'Overblikk'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <p>
        (Vanilje) web komponenter består av eit sett med nettleser-API som lar
        oss definere gjenbrukbare, isolerte elementer.
      </p>

      <h2>Kvifor?</h2>
      <ul>
        <li>
          Rammeverk lar oss lage gjenbrukbare komponenter på effektivt vis. Men
          denne effektiviteten kjem i byte mot ekstra kode som alle brukere må
          laste ned. Og dersom me finner på å blande rammeverk i samme
          applikasjon så får brukerane enda meir å laste ned.
          <ul>
            <li>
              react 17.0.1 (
              <a href="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js">
                4.95kb gzip
              </a>
              )
            </li>
            <li>
              react-dom 17.0.1 (
              <a href="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js">
                34.74kb gzip
              </a>
              )
            </li>
            <li>
              vue.js 2.6.12 (
              <a href="https://cdn.jsdelivr.net/npm/vue@2.6.12">33.18kb gzip</a>
              )
            </li>
            <li>
              preact.js 10.5.7 (
              <a href="https://unpkg.com/preact@10.5.7/dist/preact.min.js?module">
                4.76kb gzip
              </a>
              )
            </li>
            <li>
              angular 11.0.2 (
              <a href="https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.2/core.umd.min.js">
                70.41kb gzip
              </a>
              )
            </li>
          </ul>
        </li>
        <li>
          Me bruker mykje tid på å lage gjenbrukbare komponenter som er låst til
          visse økosystem.
        </li>
      </ul>

      <h2>Kvifor ikkje?</h2>
      <ul>
        <li>
          Ingen server-side rendering støtte (enda). Se:{' '}
          <a href="https://web.dev/declarative-shadow-dom/">
            Deklarativ SkyggeDOM
          </a>
        </li>
      </ul>

      <h2>Ressurser</h2>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/web-components.html">
            ReactJS docs: Web components
          </a>
        </li>
        <li>
          <a href="https://lea.verou.me/2020/09/the-failed-promise-of-web-components/">
            The failed promise of Web Components - Lea Verou
          </a>
          <ul>
            <li>
              Korleis avsporet denne teknologien, og kva kan me gjere for å få
              den tilbake på skinner?
            </li>
          </ul>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
            MDN Web docs: Web components
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=zZ1YMJydqR0">
            Web Components: It's about Time | Erin Zimmer
          </a>
        </li>
      </ul>

      <h2>Relevante prosjekter</h2>
      <ul>
        <li>
          <a href="https://www.webcomponents.org/">webcomponents.org</a>
        </li>
        <li>
          <a href="https://www.polymer-project.org/">Polymer project</a>
          <ul>
            <li>Lansert i 2015.</li>
            <li>
              2018: Annonserte eit skifte mot lit-html (
              <a href="https://en.wikipedia.org/wiki/Polymer_(library)">
                source
              </a>
              ).
            </li>
          </ul>
        </li>
        <li>
          <a href="https://open-ui.org/">Open UI</a>
          <ul>
            <li>
              Forsøk på å standardisere navngivning på tvers av rammeverk.
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
