import ReactDOM from 'react-dom'
import { useEffect, useState, useRef } from 'react'

export default function KindOfArmored({ children }) {
  const domRef = useRef(document.createElement('div'))
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log('mounting')
    const wcName = 'kind-of-armored'
    if (customElements.get(wcName)) {
      return // do nothing element already defined
    }
    let shadowRoot
    class KindOfArmored extends HTMLElement {
      constructor() {
        super()
        shadowRoot = this.attachShadow({ mode: 'closed' })
        shadowRoot.appendChild(domRef.current)
        setLoading(false)
      }
    }
    customElements.define(wcName, KindOfArmored)
    return () => {
      console.log(
        'removing shadowRoot div',
        shadowRoot.removeChild(domRef.current)
      )
      domRef.current = undefined
    }
  }, [setLoading])

  return (
    <>
      <kind-of-armored />
      {!loading && ReactDOM.createPortal(children, domRef.current)}
    </>
  )
}
