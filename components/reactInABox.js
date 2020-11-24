import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'

class ReactInABoxWC extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const mountPoint = document.createElement('div')
    const HelloWorld = <>Hallo verden</>
    ReactDOM.render(HelloWorld, mountPoint)
    this.shadowRoot.appendChild(mountPoint)
  }
}

export default function ReactInABox() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const name = 'react-in-a-box'
    if (customElements.get(name)) {
      setLoading(false)
      return
    }
    customElements.whenDefined(name).then(() => setLoading(false))
    customElements.define(name, ReactInABoxWC)
  })
  return loading ? 'loading' : <react-in-a-box />
}
