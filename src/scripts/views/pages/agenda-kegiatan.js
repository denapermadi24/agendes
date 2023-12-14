import PopupDetailAgenda from './popup-detail';
import AgendaSource from '../../data/api-source';
import CreateAgendaItem from '../templates/template-agenda-item';
import FormatDateTime from '../../utils/format-date-time';
import getToday from '../../utils/time-today';

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
      const waktuKegiatan = new Date(agenda.waktu);
      // console.log('============ waktu today ================');
      // console.log(getToday.dateToday);
      // console.log(getToday.monthToday);
      // console.log(getToday.yearToday);
      // console.log('============ waktu kegiatan ================');
      // console.log(waktuKegiatan.getDate());
      // console.log(waktuKegiatan.getMonth() + 1);
      // console.log(waktuKegiatan.getFullYear());
      // console.log('============ kondisi ================');
      // console.log(getToday.dateToday <= waktuKegiatan.getDate());
      // console.log(getToday.monthToday <= waktuKegiatan.getMonth() + 1);
      // console.log(getToday.yearToday <= waktuKegiatan.getFullYear());
      // console.log('============ hasil kondisi ================');
      // console.log(getToday.dateToday <= waktuKegiatan.getDate()
      //   && getToday.monthToday <= waktuKegiatan.getMonth() + 1
      //   && getToday.yearToday <= waktuKegiatan.getFullYear());

      const date = FormatDateTime.formatDate.format(waktuKegiatan);
      const time = FormatDateTime.formatTime.format(waktuKegiatan);

      if (getToday.dateToday <= waktuKegiatan.getDate()
        && getToday.monthToday <= waktuKegiatan.getMonth() + 1
        && getToday.yearToday <= waktuKegiatan.getFullYear()) {
        postListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard({ agenda, date, time })}`;
      }
    });

    PopupDetailAgenda.path('#/agenda-kegiatan');
  },
};

export default AgendaKegiatan;
