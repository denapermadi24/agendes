import AgendaSource from '../../data/api-source';
import CreateAgendaItem from '../templates/template-agenda-item';
import FormatDateTime from '../../utils/format-date-time';
import getToday from '../../utils/time-today';

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
    const listRiwayatKegiatan = document.querySelector('.list-riwayat-kegiatan');

    latestListAgenda.forEach((agenda) => {
      const waktuKegiatan = new Date(agenda.waktu);
      // Mengatur waktu agar sama dengan inputan user
      waktuKegiatan.setMinutes(waktuKegiatan.getMinutes() + waktuKegiatan.getTimezoneOffset());

      const date = FormatDateTime.formatDate.format(waktuKegiatan);
      const time = FormatDateTime.formatTime.format(waktuKegiatan);

      if (waktuKegiatan.getFullYear() <= getToday.yearToday) {
        if (waktuKegiatan.getFullYear() < getToday.yearToday) {
          listRiwayatKegiatan.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
        } else if (waktuKegiatan.getMonth() + 1 <= getToday.monthToday) {
          if (waktuKegiatan.getMonth() + 1 < getToday.monthToday) {
            listRiwayatKegiatan.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
          } else if (waktuKegiatan.getDate() < getToday.dateToday) {
            listRiwayatKegiatan.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
          }
        }
      }
    });
  },
};

export default RiwayatAgenda;
