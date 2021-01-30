class Popular extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="popular light">
        <div class="container">
          <div class="row">
            <h3 class="center">Popular Menu</h3>
            <div class="black-line"></div>
            <div class="wrapper">
              <i id="dehaze" class="small material-icons">dehaze</i>
              <i id="apps" class="small material-icons">apps</i>
            </div>
            <div class="divider"></div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("custom-popular", Popular);