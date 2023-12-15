import AgendaSource from '../../data/api-source';
import showListRiwayat from '../../utils/show-list-riwayat';
import showListFilteredRiwayat from '../../utils/show-list-filtered-riwayat';

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
        <input type="search" id="search-input-riwayat" class="search-input" placeholder="Nama / tanggal kegiatan">
        <button id="btn-search-riwayat" class="btn-search">Cari</button>
      </div>
    </div>
  </div>

  <div class="main-content-container">
    <section class="riwayat-agenda-kegiatan">
      <h2>Riwayat Kegiatan</h2>
      <hr>
      <section class="list-riwayat-kegiatan">

      </section>
    </section>
  </div>
  `;
  },

  async applyDataContent() {
    const listAgenda = await AgendaSource.listAgenda();
    // list agenda dari yang terbaru
    const latestListAgenda = [...listAgenda].reverse();
    const postListRiwayat = document.querySelector('.list-riwayat-kegiatan');

    latestListAgenda.forEach((agenda) => {
      // menampilkan list riwayat dari yang terbaru
      showListRiwayat({ agenda, postListRiwayat });
    });

    const inputSearch = document.querySelector('#search-input-riwayat');
    const btnSearch = document.querySelector('#btn-search-riwayat');

    const filterData = (search) => {
      if (!search) {
        postListRiwayat.innerHTML = '';
        latestListAgenda.forEach((agenda) => {
          // menampilkan list riwayat dari yang terbaru
          showListRiwayat({ agenda, postListRiwayat });
        });
      }
    };

    inputSearch.addEventListener('input', (e) => filterData(e.target.vallue));

    btnSearch.addEventListener('click', () => {
      postListRiwayat.innerHTML = '';
      latestListAgenda.forEach((agenda) => {
        // menampilkan list agenda dari hasil pencarian
        showListFilteredRiwayat({ agenda, inputSearch, postListRiwayat });
      });
    });
  },
};

export default RiwayatAgenda;
