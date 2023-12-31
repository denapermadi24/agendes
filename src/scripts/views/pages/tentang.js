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
        <a class="exchange_button" href="#/agenda-kegiatan">
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
             Selamat datang di "AgenDes" Sebuah inisiatif yang dilahirkan dari tekad untuk memperkuat
             dan memajukan masyarakat desa melalui pemanfaatan teknologi informasi. Kami adalah tim yang
             berdedikasi untuk memberikan solusi inovatif yang membantu menghubungkan, memberdayakan, dan 
             meningkatkan kualitas hidup masyarakat desa di seluruh penjuru..
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
            <img class="icon_team" src="./jalal.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="https://www.instagram.com/jaalalln/" class="medsos" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/jalal-ludin-a0a70b262/" class="medsos" target="_blank"><i class="fa fa-linkedin"></i></a>
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
            <img class="icon_team" src="./ridho.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="https://www.instagram.com/t.laluridho/" class="medsos" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/lalu-ridho-taufikurahman-6001a8239/" class="medsos" target="_blank"><i class="fa fa-linkedin"></i></a>
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
            <img class="icon_team" src="./ryan.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="https://www.instagram.com/febrianhaekal1/" class="medsos" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/mfebrian-haekal/" class="medsos" target="_blank"><i class="fa fa-linkedin"></i></a>
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
            <img class="icon_team" src="./amel.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="https://www.instagram.com/ameldvsya/" class="medsos" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/amelia-devasya17/" class="medsos" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div class="nama_team">
          <h2>Ni Putu Amelia Devasya Putri</h2>
        </div>
        <div class="nama_univ">
          <h2>ITB STIKOM Bali</h2>
        </div>
      </div>

      <div class="team_card">
        <div class="team_avatar">
          <div class="team_image">
            <img class="icon_team" src="./dena.png" alt="Team Icon" />
          </div>
          <div class="icon_medsos-avtr">
            <a href="https://www.instagram.com/dnaprmdi/" class="medsos" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/dena-indiarto-permadi-74436126a/" class="medsos" target="_blank"><i class="fa fa-linkedin"></i></a>
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
  </div>
    `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default Tentang;
