// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Beranda = {
  async renderPageContent() {
    return `
    <div class="container container-top">
    <div class="desc_hero">
      <div class="hero_title">
        <h1>Cek Jadwalkan Kegiatan Desa Anda Dengan AgenDes</h1>
      </div>
      <div class="hero_subtitle">
        <p> Jadikan setiap kegiatan desa lebih terkoordinasi dan terstruktur.
          Mari membangun desa anda dan wujudkan solidaritas bersama AgenDes. Yuk gunakan AgenDes sekarang!
        </p>
        <a class="exchange_button" href="#/agenda-kegiatan">
          Cek Agenda
        </a>
      </div>
    </div>
    <img class="image_hero" src="./hero-beranda.png" alt="Hero" />
  </div>

  <div class="main-content-container">
    <div class="maincontent" id="maincontent">
      <div class="deskripsi_container">
        <div class="nama">
          <h2>AgenDes</h2>
        </div>
        <div class="deskripsi_paragraf">
          <p>
             Dalam era teknologi informasi yang berkembang pesat, keberadaan Agenda Desa atau yang dikenal sebagai "Agendes"
             menjadi kunci dalam memfasilitasi dan meningkatkan partisipasi masyarakat dalam berbagai kegiatan di desa mereka.
             Agendes bukan sekadar platform, tetapi sebuah inovasi yang menghubungkan, memberdayakan, dan membuat kegiatan desa
             menjadi lebih informatif, efisien, dan mudah diakses bagi semua warga. Dengan mengintegrasikan teknologi, 
             Agendes menciptakan solusi yang tidak hanya memudahkan pelaksanaan kegiatan desa, tetapi juga meningkatkan keterlibatan
             masyarakat secara keseluruhan..
          </p>
        </div>
      </div>

      <div class="layanan_container">
        <div class="heading_layanan_title">
          <h2>Layanan Yang Kami Sediakan</h2>
          <hr />
        </div>
        <div class="sub_layanan">
          <div class="layanan">
            <img class="image_layanan" src="jadwal.png" alt="Layanan 1" />
            <div class="layanan_title">
              <h3>Jadwal Kegiatan Desa </h3>
            </div>
            <div class="deskripsi_layanan">
              <p>
                Di Agendes, anda dapat melihat daftar kegiatan desa anda dan rincian informasi mengenai kegiatan dengan
                mudah.
              </p>
            </div>
          </div>
          <div class="layanan">
            <img class="image_layanan" src="riwayat.png" alt="Layanan 2" />
            <div class="layanan_title">
              <h3>Riwayat Kegiatan </h3>
            </div>
            <div class="deskripsi_layanan">
              <p>
                Di Agendes juga anda dapat melihat riwayat kegiatan desa yang telah berlangsung
              </p>
            </div>
          </div>
          <div class="layanan">
            <img class="image_layanan" src="pengingat.png" alt="Layanan 3" />
            <div class="layanan_title">
              <h3>Pengingat Kegiatan</h3>
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
        <div class="heading_layanan_title">
          <h2>Mengapa Kami</h2>
          <hr />
        </div>
        <div class="sub_layanan">
          <div class="layanan">
            <i class="icon_center fa fa-get-pocket fa-5x"> </i>
            <div class="layanan_title">
              <h3>Informatif</h3>
            </div>
            <div class="deskripsi_layanan">
              <p>
                 Agendes berperan sebagai pusat informasi yang menyajikan segala hal yang berkaitan dengan kegiatan desa.
                 Dengan adanya fitur kalender dan fitur notifikasi real-time memastikan bahwa setiap perubahan atau tambahan
                 nformasi segera diketahui oleh masyarakat. Ini menciptakan lingkungan informasional yang dinamis dan 
                 memungkinkan warga desa untuk tetap terhubung dengan perkembangan terkini di lingkungan mereka..
              </p>
            </div>
          </div>
          <div class="layanan">
            <i class="icon_center fa fa-get-pocket fa-5x"></i>
            <div class="layanan_title">
              <h3>Efisien</h3>
            </div>
            <div class="deskripsi_layanan">
              <p>
                 Agendes membawa efisiensi dalam pendaftaran dan pengelolaan kegiatan desa.
                 Proses pendaftaran yang mudah dan dilakukan secara daring meminimalkan kerumitan administratif. 
                 Warga desa dapat dengan cepat mendaftarkan kegiatan atau usulan mereka tanpa perlu melewati proses yang rumit.
                 Hal ini tidak hanya mempercepat proses persetujuan, tetapi juga mengurangi hambatan administratif yang
                 mungkin menghambat partisipasi masyarakat..
              </p>
            </div>
          </div>
          <div class="layanan">
            <i class="icon_center fa fa-get-pocket fa-5x"></i>
            <div class="layanan_title">
              <h3>Mudah Digunakan</h3>
            </div>
            <div class="deskripsi_layanan">
              <p>
                 Salah satu kunci keberhasilan Agendes adalah antarmuka pengguna yang ramah dan mudah digunakan. 
                 Meskipun berbasis teknologi, Agendes dirancang untuk dapat diakses oleh semua kalangan masyarakat,
                 termasuk mereka yang tidak terbiasa dengan teknologi informasi. 
                 Desain yang responsif dan navigasi yang intuitif memastikan bahwa setiap warga dapat dengan mudah 
                 mengakses informasi dan berpartisipasi dalam kegiatan desa..
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="maincontent" id="maincontent">
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

export default Beranda;
