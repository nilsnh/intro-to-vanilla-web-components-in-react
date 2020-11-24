;(async function () {
  // Inspired by: https://alligator.io/web-components/attributes-properties/
  const template = document.createElement('template')
  template.innerHTML = `
    <div>
      <slot></slot>
    </div>
  `

  const borderStyles = [
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ]

  class FancyBorder extends HTMLElement {
    constructor() {
      super()
      this.root = this.attachShadow({ mode: 'open' })
      this.root.appendChild(template.content.cloneNode(true))
      this.borderDiv = this.root.querySelector('div')
      this.borderStyle = borderStyles[0]
      this.flipBorder = this.flipBorder.bind(this)
      this.renderBorder = this.renderBorder.bind(this)
      this.checkIfParty = this.checkIfParty.bind(this)
    }

    static get observedAttributes() {
      return ['color', 'party']
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'color') {
        this.color = newValue
        this.renderBorder()
      } else if (name === 'party') {
        this.checkIfParty()
      }
    }

    renderBorder() {
      this.borderDiv.style = `border: 5px ${this.borderStyle} ${this.color}`
    }

    checkIfParty() {
      const isParty = this.getAttribute('party')
      if (isParty === 'true' && !this.intervalID) {
        this.intervalID = setInterval(this.flipBorder, 1000)
      } else if (isParty !== 'true' && this.intervalID) {
        clearInterval(this.intervalID)
        delete this.intervalID
      }
    }

    flipBorder() {
      const currentIndex = borderStyles.indexOf(this.borderStyle)
      if (currentIndex === borderStyles.length - 1) {
        this.borderStyle = borderStyles[0]
      } else {
        this.borderStyle = borderStyles[currentIndex + 1]
      }
      this.renderBorder()
    }

    connectedCallback() {
      this.color = this.getAttribute('color') || 'blue'
      this.renderBorder()
      this.checkIfParty()
    }

    disconnectedCallback() {
      if (this.intervalID) {
        clearInterval(this.intervalID)
      }
    }
  }

  const isDefined = customElements.get('fancy-border')
  if (!isDefined) {
    customElements.define('fancy-border', FancyBorder)
  }
})()
