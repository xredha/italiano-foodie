class Welcome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = 
    `
      <div class="welcome light teal lighten-4">
        <div class="container white-text">
          <div class="row">
            <h3 class="center">Welcome</h3>
            <div class="white-line"></div>
            <div class="col s12 m6">
              <h5 class="center">Introduction</h5>
              <p>Berdiri sejak tahun 1962. Italiano Foodie merupakan restoran yang menjaga cita rasa asli dari masakan Italia. Restauran ini diwariskan turun temurun dan sekarang sudah sampai generasi ke-4.</p>
              <p>Seiring perkembangan zaman, restoran ini melakukan renovasi tempat agar terlihat lebih modern dengan tetap mempertahankan rasa masakan asli Italia. Restoran ini sangat menjaga kebersihan dan menggunakan bahan-bahan alami tanpa pengawet sehingga kesehatannya terjamin.</p>
            </div>
            <div class="col s12 m6">
              <h5 class="center">Food Review</h5>
              <div class="video-container">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/tBKJuRqotPI" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-welcome", Welcome);