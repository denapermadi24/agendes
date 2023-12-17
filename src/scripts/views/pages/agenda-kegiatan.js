import PopupDetailAgenda from './popup-detail';
import AgendaSource from '../../data/api-source';
import showListAgenda from '../../utils/show-list-agenda';
import showListFilteredAgenda from '../../utils/show-list-filtered-agenda';

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
          <p>AgenDes dilengkapi dengan fitur pencarian histori dan detail kegiatan yang memudahkan Anda dalam pencatatan
            riwayat dan evaluasi untuk kegiatan selanjutnya.
          </p>
          <input type="search" id="search-input-agenda" class="search-input" placeholder="Nama / tanggal kegiatan">
          <button id="btn-search-agenda" class="btn-search">Cari</button>
        </div>
      </div>
    </div>

    <div class="main-content-container">
      <section class="riwayat-agenda-kegiatan">
        <h2>Kegiatan Terbaru</h2>
        <hr>
        <section class="list-agenda-kegiatan">

        </section>
      </section>
    </div>
  `;
  },

  async applyDataContent() {
    const listAgenda = await AgendaSource.listAgenda();
    console.log(listAgenda);
    // list agenda dari yang terbaru
    const latestListAgenda = [...listAgenda].reverse();
    const postListAgenda = document.querySelector('.list-agenda-kegiatan');

    latestListAgenda.forEach((agenda) => {
      // menampilkan list agenda dari yang terbaru
      showListAgenda({ agenda, postListAgenda });
    });

    PopupDetailAgenda.path('#/agenda-kegiatan');

    const inputSearch = document.querySelector('#search-input-agenda');
    const btnSearch = document.querySelector('#btn-search-agenda');

    const filterData = (search) => {
      if (!search) {
        postListAgenda.innerHTML = '';
        latestListAgenda.forEach((agenda) => {
          // menampilkan list agenda dari yang terbaru
          showListAgenda({ agenda, postListAgenda });
        });
      }
    };

    inputSearch.addEventListener('input', (e) => filterData(e.target.value));

    btnSearch.addEventListener('click', () => {
      postListAgenda.innerHTML = '';
      latestListAgenda.forEach((agenda) => {
        // menampilkan list agenda dari hasil pencarian
        showListFilteredAgenda({ agenda, inputSearch, postListAgenda });
      });
    });
  },
};

export default AgendaKegiatan;
