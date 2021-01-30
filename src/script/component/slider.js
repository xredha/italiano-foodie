class Slider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="slider">
        <ul class="slides"></ul>
      </div>
    `;
  }
}

customElements.define("custom-slider", Slider);