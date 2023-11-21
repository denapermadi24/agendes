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
    class="exchange_button href="#/agenda"
  >
    Cek Agenda
  </a>
  <img class="image_hero" src="hero_beranda.png" alt="Hero" />
</div>

<div class="maincontent" id="maincontent" >
  <div class="deskripsi_container">
    <div class="nama">
      <h1>AgenDes</h1>
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

  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Layanan Yang Kami Sediakan</h1>
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <img class="image_layanan" src="jadwal.png" alt="Layanan 1" />
        <div class="layanan_title">
          <h1>Jadwal Kegiatan Desa </h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
          Di Agendes, anda dapat melihat daftar kegiatan desa anda dan rincian informasi mengenai kegiatan dengan mudah.
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src="riwayat.png" alt="Layanan 2" />
        <div class="layanan_title">
          <h1>Riwayat Kegiatan </h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
          Di Agendes juga anda dapat melihat riwayat kegiatan desa yang telah berlangsung
          </p>
        </div>
      </div>
      <div class="=layanan">
        <img class="image_layanan" src="pengingat.png" alt="Layanan 3" />
        <div class="layanan_title">
          <h1>Pengingat Kegiatan</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
          Terdapat pengingat kegiatan untuk agenda desa yang anda mau sehingga anda tidak terlupa
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="layanan_container">
    <div class="layanan_title">
      <h1>Mengapa Kami</h1>
      <hr />
    </div>
    <div class="sub_layanan">
      <div class="layanan">
        <i class="icon_center fa fa-get-pocket fa-5x"> </i>
        <div class="layanan_title">
          <h1>Informatif</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Pengguna dapat dengan mudah menukar dan mengelola sampah mereka
            melalui transaksi digital, tanpa repot datang ke tempat pengolahan
            sampah secara mandiri.
          </p>
        </div>
      </div>
      <div class="layanan">
        <i class="icon_center fa fa-get-pocket fa-5x"></i>
        <div class="layanan_title">
          <h1>Efisien</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Layanan pick-up sampah yang disediakan memungkinkan pengguna untuk
            mendapatkan sampah mereka dijemput langsung oleh tim Tracycle,
            menghemat waktu dan tenaga.
          </p>
        </div>
      </div>
      <div class="layanan">
        <i class="icon_center fa fa-get-pocket fa-5x"></i>
        <div class="layanan_title">
          <h1>Mudah Digunakan</h1>
        </div>
        <div class="deskripsi_layanan">
          <p>
            Masyarakat dapat lebih mudah dan terorganisir dalam membuang sampah
            dengan benar, serta mendukung upaya daur ulang dan pengelolaan
            sampah yang berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="tukar_container container">
    <div class="hero_title">
      <h1>Ingin Melihat Kegiatan Sebelumnya?</h1>
    </div>
    <div class="hero_subtitle">
    Anda ingin melihat kegiatan sebelumnya? Tenang! kami menyediakan informasi histori 
    kegiatan desa yang sudah berlalu. Yuk! segera cek riwayat kegiatan sebagai arsip 
    atau evaluasi untuk masa depan!
    </div>
    <a
      class="exchange_button"
      href="#/riwayat-agenda"
    >
      Cek Riwayat
    </a>
    <img class="image_hero" src="beranda_riwayat.png" alt="Hero" />
  </div>
</div>

  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default Beranda;
