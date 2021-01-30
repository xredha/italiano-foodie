class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <footer class="green lighten-2 white-text center">
        <div class="container">
          <p class="flow-text">Design by Galih &copy 2020 - Submission Dicoding - Made with Love <i class="material-icons red-text">favorite</i></p>
        </div>
      </footer>
    `;
  }
}
customElements.define("custom-footer", Footer);