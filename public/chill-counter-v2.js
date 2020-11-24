;(async function () {
  const h = await import('https://cdn.skypack.dev/hyperscript').then((module) =>
    module.default.context()
  )

  class ChillCounterV2 extends HTMLElement {
    constructor() {
      super()
      this.counter = 0
      this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
      // Save reference so we can call it.
      this.counterDiv = h('div', `Counter: ${this.counter}`)
      const treeStructure = h(
        'div.counter',
        h('style', this.getStyles()),
        h('button', { onclick: this.increment }, '+'),
        h('button', { onclick: this.decrement }, '-'),
        this.counterDiv
      )
      this.root.appendChild(treeStructure)
    }

    disconnectedCallback() {
      // Cleanup listeners
      h.cleanup()
    }

    increment = () => {
      this.counter++
      this.counterDiv.textContent = `Counter: ${this.counter}`
    }

    decrement = () => {
      this.counter--
      this.counterDiv.textContent = `Counter: ${this.counter}`
    }

    getStyles() {
      return `
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
    }
  }

  const isDefined = customElements.get('chill-counter-v2')
  if (!isDefined) {
    customElements.define('chill-counter-v2', ChillCounterV2)
  }
})()
