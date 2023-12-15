import CreateAgendaItem from '../views/templates/template-agenda-item';
import FormatDateTime from './format-date-time';
import getToday from './time-today';

const showListRiwayat = ({ agenda, postListRiwayat }) => {
  const waktuKegiatan = new Date(agenda.waktu);
  // Mengatur waktu agar sama dengan inputan user
  waktuKegiatan.setMinutes(waktuKegiatan.getMinutes() + waktuKegiatan.getTimezoneOffset());

  const date = FormatDateTime.formatDate.format(waktuKegiatan);
  const time = FormatDateTime.formatTime.format(waktuKegiatan);
  const elementPostListRiwayat = postListRiwayat;

  // Mengecek dan menampilkan item list yang tanggal, bulan dan tahun kegiatan < saat ini
  if (waktuKegiatan.getFullYear() <= getToday.yearToday) {
    if (waktuKegiatan.getFullYear() < getToday.yearToday) {
      elementPostListRiwayat.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
    } else if (waktuKegiatan.getMonth() + 1 <= getToday.monthToday) {
      if (waktuKegiatan.getMonth() + 1 < getToday.monthToday) {
        elementPostListRiwayat.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
      } else if (waktuKegiatan.getDate() < getToday.dateToday) {
        elementPostListRiwayat.innerHTML += `${CreateAgendaItem.riwayatAgendaItemCard({ agenda, date, time })}`;
      }
    }
  }
};

export default showListRiwayat;
