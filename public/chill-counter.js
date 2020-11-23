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
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.buildContents = this.buildContents.bind(this)
    this.buildContents()
  }

  buildContents() {
    const wrapper = document.createElement('div')
    wrapper.className = 'counter'
    const style = document.createElement('style')
    style.textContent = styles
    wrapper.appendChild(style)
    this.counterDiv = document.createElement('div')
    this.counterDiv.textContent = `Counter: ${this.counter}`

    this.btnIncrement = document.createElement('button')
    this.btnIncrement.addEventListener('click', this.increment)
    this.btnIncrement.textContent = '+'
    wrapper.appendChild(this.btnIncrement)

    this.btnDecrement = document.createElement('button')
    this.btnDecrement.addEventListener('click', this.decrement)
    this.btnDecrement.textContent = '-'
    wrapper.appendChild(this.btnDecrement)

    wrapper.appendChild(this.counterDiv)
    this.root.appendChild(wrapper)
  }

  connectedCallback() {}

  disconnectedCallback() {
    this.btnIncrement.removeEventListener('click', this.increment)
    this.btnDecrement.removeEventListener('click', this.decrement)
    console.log('removing listeners')
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

const isDefined = customElements.get('chill-counter')
if (!isDefined) {
  customElements.define('chill-counter', ChillCounter)
}
