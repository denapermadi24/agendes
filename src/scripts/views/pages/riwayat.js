// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const RiwayatAgenda = {
  async renderPageContent() {
    return `
    <div class="container-riwayat-agenda shadow">
      <img class="img-riwayat-kegiatan" src="./riwayat_agenda.png" alt="Hero" width="450" />
      <div class="desc_hero">
        <div class="hero_title">
          <h1>Temukan histori agenda kegiatan desa disini!</h1>
        </div>
        <div class="hero_subtitle">
          <p>AgenDes dilengkapi dengan fitur pencarian histori dan detail kegiatan yang memudahkan Anda dalam pencatatan
            riwayat dan evaluasi untuk kegiatan selanjutnya.
          </p>
          <input type="search" class="search-input" placeholder="Nama / tanggal kegiatan">
          <button class="btn-search">Cari</button>
        </div>
      </div>
    </div>

    <div class="main-content-container">
      <div class="container-post-kegiatan">
        <div class="post-kegiatan">
          <div class="form-post-kegiatan">
            <section class="input_section shadow">
              <h2>Riwayat Kegiatan</h2>

            </section>
          </div>
        </div>
      </div>
    </div>
  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default RiwayatAgenda;
