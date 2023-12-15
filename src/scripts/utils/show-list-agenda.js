import CreateAgendaItem from '../views/templates/template-agenda-item';
import FormatDateTime from './format-date-time';
import getToday from './time-today';

const showListAgenda = ({ agenda, postListAgenda }) => {
  const waktuKegiatan = new Date(agenda.waktu);
  // Mengatur waktu agar sama dengan inputan user
  waktuKegiatan.setMinutes(waktuKegiatan.getMinutes() + waktuKegiatan.getTimezoneOffset());

  const date = FormatDateTime.formatDate.format(waktuKegiatan);
  const time = FormatDateTime.formatTime.format(waktuKegiatan);
  const elementPostListAgenda = postListAgenda;

  // Mengecek dan menampilkan item list yang tanggal, bulan dan tahun kegiatan > saat ini
  if (waktuKegiatan.getFullYear() >= getToday.yearToday) {
    if (waktuKegiatan.getFullYear() > getToday.yearToday) {
      elementPostListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard({ agenda, date, time })}`;
    } else if (waktuKegiatan.getMonth() + 1 >= getToday.monthToday
      && waktuKegiatan.getDate() >= getToday.dateToday) {
      elementPostListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard({ agenda, date, time })}`;
    }
  }
};

export default showListAgenda;
