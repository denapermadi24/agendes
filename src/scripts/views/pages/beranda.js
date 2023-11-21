// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Beranda = {
  async renderPageContent() {
    return `
    <div class="container">
  <div class="hero_title">
    <h1>Cek Jadwalkan Kegiatan Desa Anda Dengan AgenDes</h1>
  </div>
  <div class="hero_subtitle">
    <p> Jadikan setiap kegiatan desa lebih terkoordinasi dan terstruktur. 
    Mari membangun desa anda dan wujudkan solidaritas bersama AgenDes. Yuk gunakan AgenDes sekarang!  
    </p>
  </div>
  <a
    class="exchange_button href="#/riwayat-agenda"
  >
    Cek Agenda
  </a>
  <img class="image_hero" src="hero_beranda.png" alt="Hero" />
</div>
  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default Beranda;
