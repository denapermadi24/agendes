// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const AgendaKegiatan = {
  async renderPageContent() {
    return `
    <div class="container-riwayat-agenda shadow">
    <img class="img-riwayat-kegiatan" src="./agenda.png" alt="Hero" width="450" />
    <div class="desc_hero">
      <div class="hero_title">
        <h1>Temukan agenda kegiatan desa disini!</h1>
      </div>
      <div class="hero_subtitle">
        <p>AgenDes dilengkapi dengan fitur pencarian histori dan detail kegiatan yang memudahkan Anda dalam pencatatan riwayat dan evaluasi untuk kegiatan selanjutnya.
        </p>
        <input type="search" class="search-input" placeholder="Nama / tanggal kegiatan">
        <button class="btn-search">Cari</button>
      </div>
    </div>
  </div>

  <div class="main-content-container">
    <section class="riwayat-kegiatan">
      <h2>Kegiatan Terbaru</h2>
      <hr>
      <section class="list-riwayat-kegiatan">

      </section>
    </section>
  </div>
  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default AgendaKegiatan;
