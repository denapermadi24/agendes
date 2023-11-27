// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Tentang = {
  async renderPageContent() {
    return `
      <div class="container">
        <div class="desc_hero">
          <div class="hero_title">
            <h1>Yuk Kenalan dengan AgenDes</h1>
          </div>
          <div class="hero_subtitle">
            <p> Selamat datang di laman kami! Di sini, kami ingin berbagi dengan Anda mengenai visi misi kami, tentang kami sebagai tim, serta memberikan informasi tentang aplikasi yang kami hasilkan. Kami percaya bahwa dengan memahami lebih dalam mengenai nilai-nilai kami dan tujuan kami dalam menciptakan solusi yang bermanfaat, Anda akan semakin yakin dengan apa yang kami tawarkan.
            </p>
          </div>
          <a
            class="exchange_button" href="#/agenda">
            Cek Agenda
          </a>
        </div>
        <img class="image_hero" src="beranda_riwayat.png" alt="Hero" />
      </div>
    
    
    <div class="maincontent" id="maincontent" >
      <div class="deskripsi_container">
        <div class="tentangkami">
          <h1 class="teks-tentangkami">Tentang Kami</h1>
        </div>
        <div class="deskripsi_paragraf">
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      
    </div>
    `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default Tentang;
