// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const DashboardAdmin = {
  async renderPageContent() {
    return `
    <div class="container container-top shadow">
      <div class="desc_hero">
        <div class="hero_title">
          <h1>Tambahkan Jadwal Kegiatan Desa Anda Dengan AgenDes</h1>
        </div>
        <div class="hero_subtitle">
          <p>Jadikan setiap kegiatan desa lebih terkoordinasi dan terstruktur. Mari membangun desa anda dan wujudkan
            solidaritas bersama AgenDes. Yuk gunakan AgenDes sekarang!
          </p>
          <a class="exchange_button" href="#/agenda">
            Tambah Agenda
          </a>
        </div>
      </div>
      <img class="image_hero" src="./hero-beranda.png" alt="Hero" />
    </div>

    <div class="main-content-container">
    <div class="container-post-kegiatan">
      <div class="post-kegiatan">
        <div class="form-post-kegiatan">
          <section class="input_section shadow">
            <h2>Post Kegiatan</h2>
            <form id="input-kegiatan">
              <div class="input">
                <label for="nama-kegiatan">Nama Kegiatan</label>
                <input id="nama-kegiatan" type="text" required>
              </div>
              <div class="input">
                <label for="deskripsi-kegiatan">Deskripsi Kegiatan</label>
                <input id="deskripsi-kegiatan" type="text" required>
              </div>
              <div class="input">
                <label for="tempat">Tempat Kegiatan</label>
                <input id="tempat" type="text" required>
              </div>
              <div class="input">
              <label for="option-kegiatan">Jenis Kegiatan</label>
                <select id="option-kegiatan">
                  <option value="renovasi-masjid">Renovasi masjid</option>
                  <option value="pembersihan-sungai">Pembersihan sungai</option>
                </select>
              </div>
              <div class="input">
                <label for="tanggal">Tanggal Kegiatan</label>
                <input id="tanggal" type="date" required>
              </div>
              <div class="input">
                <label for="waktu">Waktu Kegiatan</label>
                <input id="waktu" type="time" required>
              </div>
              <div class="input">
                <label for="tambahan">Tambahan</label>
                <input id="tambahan" type="text" required>
              </div>
              <button id="submit-kegiatan" class="shadow btn-animation" type="submit">SUBMIT</button>
            </form>
          </section>
        </div>
      </div>

      <div class="maincontent shadow" id="maincontent">
        <div class="deskripsi_container shadow">
          <div class="tentangkami">
            <h2>Perhatian!!!</h2>
          </div>
          <div class="deskripsi_paragraf">
            <p>
              Setelah anda selesai menambah kegiatan baru, periksalah pada bagian agenda untuk memastikan apakah
              kegiatan yang baru anda buat telah berhasil tesimpan.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="maincontent shadow" id="maincontent">
      <div class="tukar_container container">
        <div class="desc_hero">
          <div class="hero_title">
            <h2>Ingin Melihat Kegiatan Sebelumnya?</h2>
          </div>
          <div class="hero_subtitle">
            Anda ingin melihat kegiatan sebelumnya? Tenang! kami menyediakan informasi histori
            kegiatan desa yang sudah berlalu. Yuk! segera cek riwayat kegiatan sebagai arsip
            atau evaluasi untuk masa depan!
            <a class="exchange_button" href="#/riwayat-agenda">
              Cek Riwayat
            </a>
          </div>
        </div>
        <img class="image_hero image_hero_cek_kegiatan" src="./cek-riwayat.png" alt="Hero"/>
      </div>
    </div>
    </div>
  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default DashboardAdmin;
