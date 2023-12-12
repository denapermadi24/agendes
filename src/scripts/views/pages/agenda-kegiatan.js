import PopupDetailAgenda from './popup-detail';
import AgendaSource from '../../data/api-source';
import CreateAgendaItem from '../templates/template-agenda-item';

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
          <input type="search" class="search-input" placeholder="Nama / tanggal kegiatan">
          <button class="btn-search">Cari</button>
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
    const postListAgenda = document.querySelector('.list-agenda-kegiatan');

    listAgenda.forEach((agenda) => {
      postListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard(agenda)}`;
    });

    PopupDetailAgenda.path('#/agenda-kegiatan');
  },
};

export default AgendaKegiatan;
