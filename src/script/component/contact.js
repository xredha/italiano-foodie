class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="contact">
        <div class="container">
          <h3 class="center light grey-text text-darken-3">Contact Us</h3>
          <div class="row">
            <div class="col s12 m5">
              <div class="card-panel green lighten-2 center white-text">
                <i class="material-icons">email</i>
                <h5>Contact Us</h5>
                <p>Jika ada kritik dan saran, bisa hubungi kami lewat form yang sudah disediakan.</p>
              </div>
              <ul class="collection with-header">
                <li class="collection-header"><h4>Support by</h4></li>
                <li class="collection-item">Dicoding</li>
                <li class="collection-item">Web Programming UNPAS</li>
                <li class="collection-item">Documentation</li>
                <li class="collection-item">w3schools.com</li>
              </ul>
            </div>

            <div class="col s12 m7">
              <div class="card-panel">
                <h5>Please fill out this form.</h5>
                <form>
                  <div class="input-field">
                    <input id="name" type="text" class="validate" required>
                    <label for="name">Nama</label>
                  </div>
                  <div class="input-field">
                    <input id="email" type="email" class="validate" required>
                    <label for="email">E-mail</label>
                  </div>
                  <div class="input-field">
                    <input id="phone" type="tel" class="validate" required>
                    <label for="phone">Nomor Telepon</label>
                  </div>
                  <div class="input-field">
                    <textarea name="message" id="message" cols="30" rows="10" class="materialize-textarea"></textarea>
                    <label for="message">Kritik dan Saran</label> 
                  </div>
                  <button type="submit" class="btn green lighten-2">Kirim</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("custom-contact", Contact);