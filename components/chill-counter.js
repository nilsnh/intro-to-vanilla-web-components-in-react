import { useEffect } from 'react'

const styles = `
  .counter {
    display: flex;
    align-items: center;
  }
  .counter > * {
    margin: var(--spacing-small);
  }
  button {
    border: 1px solid var(--chill-blue);
  }
`

class ChillCounter extends HTMLElement {
  constructor() {
    super()
    this.counter = 0
    this.root = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.className = 'counter'
    const style = document.createElement('style')
    style.textContent = styles
    wrapper.appendChild(style)
    this.counterDiv = document.createElement('div')
    this.counterDiv.textContent = `Counter: ${this.counter}`

    const btnIncrement = document.createElement('button')
    const increment = this.increment.bind(this)
    btnIncrement.addEventListener('click', increment)
    btnIncrement.textContent = '+'
    wrapper.appendChild(btnIncrement)

    const btnDecrement = document.createElement('button')
    const decrement = this.decrement.bind(this)
    btnDecrement.addEventListener('click', decrement)
    btnDecrement.textContent = '-'
    wrapper.appendChild(btnDecrement)

    wrapper.appendChild(this.counterDiv)
    this.root.appendChild(wrapper)
  }

  increment() {
    this.counter++
    this.counterDiv.textContent = `Counter: ${this.counter}`
  }

  decrement() {
    this.counter--
    this.counterDiv.textContent = `Counter: ${this.counter}`
  }
}

export default function ChillCounterWrapper() {
  useEffect(() => {
    const isDefined = customElements.get('chill-counter')
    if (isDefined) {
      return // No need to re-define component
    }
    customElements.define('chill-counter', ChillCounter)
  }, [])
  return (
    <>
      <chill-counter></chill-counter>
    </>
  )
}
