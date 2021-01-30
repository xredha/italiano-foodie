class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="navbar-fixed">
      <nav class="green lighten-2">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo light">Italiano Foodie</a>
            <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#" class="link-popular">Popular Menu</a></li>
              <li><a href="#" class="link-contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <ul class="sidenav" id="mobile-nav">
        <li><a href="#" class="link-popular">Popular Menu</a></li>
        <li><a href="#" class="link-contact">Contact Us</a></li>
      </ul>
    `;
  }
}

customElements.define("custom-navbar", Navbar);