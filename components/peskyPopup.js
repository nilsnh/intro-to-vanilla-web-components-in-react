import { useEffect, useState } from 'react'

let btnRef

// SSR hack to prevent Babel from panicking.
// Source: https://github.com/github/babel-plugin-transform-custom-element-classes/issues/5#issuecomment-287732463
const HTMLElement =
  typeof window === 'undefined' ? function () {} : window.HTMLElement

class PeskyPopUpWC extends HTMLElement {
  constructor() {
    super()
    const template = document.createElement('template')
    template.innerHTML = `
      <button class="pesky">Pesky pop-up</button>
    `
    const shadow = this.attachShadow({ mode: 'closed' })
    shadow.appendChild(template.content.cloneNode(true))
    btnRef = shadow.querySelector('button')
  }

  peskyAlert = () => {
    const msg = this.getAttribute('msg') || 'no message defined'
    alert(msg)
  }

  connectedCallback() {
    btnRef.addEventListener('click', this.peskyAlert)
    console.log('peskyAlert added listener')
  }

  disconnectedCallback() {
    btnRef.removeEventListener('click', this.peskyAlert)
    console.log('peskyAlert removed listener')
  }
}

export default function PeskyPopup({ msg }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return // do nothing, we're serverside
    }
    const wcName = 'pesky-pop-up'
    if (customElements.get(wcName)) {
      return // do nothing element already defined
    }
    customElements.whenDefined(wcName).then(() => setLoading(false))
    customElements.define(wcName, PeskyPopUpWC)
  }, [])
  return loading ? 'Loading' : <pesky-pop-up msg={msg} />
}
