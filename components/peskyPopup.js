import { useEffect, useState } from 'react'

// Wait to define class until we are client-side
const getPeskyPopupWC = () => {
  const template = document.createElement('template')
  template.innerHTML = `
    <button class="pesky">Pesky pop-up</button>
  `
  let btnRef
  return class PeskyPopUpWC extends HTMLElement {
    constructor() {
      super()
      // What if this was set to 'open'?
      const shadow = this.attachShadow({ mode: 'closed' })
      shadow.appendChild(template.content.cloneNode(true))
      // What if button was defined on this?
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
    customElements.define(wcName, getPeskyPopupWC())
  }, [])
  return loading ? 'Loading' : <pesky-pop-up msg={msg} />
}
