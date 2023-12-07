// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Tentang = {
  async renderPageContent() {
    return `
      
    <div class="container container-top shadow">
    <div class="desc_hero">
      <div class="hero_title">
        <h1>Yuk Kenalan dengan AgenDes</h1>
      </div>
      <div class="hero_subtitle">
        <p> Selamat datang di laman kami! Di sini, kami ingin berbagi dengan Anda mengenai visi misi kami, tentang
          kami sebagai tim, serta memberikan informasi tentang aplikasi yang kami hasilkan. Kami percaya bahwa dengan
          memahami lebih dalam mengenai nilai-nilai kami dan tujuan kami dalam menciptakan solusi yang bermanfaat,
          Anda akan semakin yakin dengan apa yang kami tawarkan.
        </p>
        <a class="exchange_button" href="#/agenda">
          Cek Agenda
        </a>
      </div>
    </div>
    <img class="image_hero" src="./cek-riwayat.png" alt="Hero"/>
  </div>

  <div class="main-content-container">
    <div class="maincontent" id="maincontent">
      <div class="deskripsi_container shadow">
        <div class="tentangkami">
          <h2 class="teks-tentangkami">Tentang Kami</h2>
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

    <div class="team">
    <h2 class="our-team">Our Team</h2>
    <hr style="background-color: black;"/>
    </div>
    <div class="team_container">
      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="test.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="#" class="medsos"><i class="fa fa-instagram"></i></a>
            <a href="#" class="medsos"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>Jalalludin</h2>
        </div>
        <div class="nama_univ">
          <h2>Universitas Bumigora</h2>
        </div>
      </div>

      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="test.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="#" class="medsos"><i class="fa fa-instagram"></i></a>
            <a href="#" class="medsos"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>L. Ridho Taufikurahman</h2>
        </div>
        <div class="nama_univ">
          <h2>Universitas Bumigora</h2>
        </div>
      </div>

      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="test.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="#" class="medsos"><i class="fa fa-instagram"></i></a>
            <a href="#" class="medsos"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>Muhammad Febrian Haekal</h2>
        </div>
        <div class="nama_univ">
          <h2>Universitas Bumigora</h2>
        </div>
      </div>

      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="test.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="#" class="medsos"><i class="fa fa-instagram"></i></a>
            <a href="#" class="medsos"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>Ni Putu Amelia Devasya Putri</h2>
        </div>
        <div class="nama_univ">
          <h2>Institut Teknologi dan Bisnis STIKOM Bali</h2>
        </div>
      </div>

      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="test.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="#" class="medsos"><i class="fa fa-instagram"></i></a>
            <a href="#" class="medsos"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>Dena Indiarto Permadi</h2>
        </div>
        <div class="nama_univ">
          <h2>Universitas Mataram</h2>
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

export default Tentang;
