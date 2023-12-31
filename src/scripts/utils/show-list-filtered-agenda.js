import CreateAgendaItem from '../views/templates/template-agenda-item';
import FormatDateTime from './format-date-time';
import getToday from './time-today';

const showListFilteredAgenda = ({ agenda, inputSearch, postListAgenda }) => {
  const waktuKegiatan = new Date(agenda.waktu);
  // Mengatur waktu agar sama dengan inputan user
  waktuKegiatan.setMinutes(waktuKegiatan.getMinutes() + waktuKegiatan.getTimezoneOffset());

  const date = FormatDateTime.formatDate.format(waktuKegiatan);
  const time = FormatDateTime.formatTime.format(waktuKegiatan);
  const elementPostListAgenda = postListAgenda;

  const filteredSearch = date.toLowerCase().trim()
    .includes(inputSearch.value.toLowerCase().trim())
    || agenda.nama_kegiatan.toLowerCase().trim()
      .includes(inputSearch.value.toLowerCase().trim());

  if (filteredSearch) {
    if (waktuKegiatan.getFullYear() >= getToday.yearToday) {
      if (waktuKegiatan.getFullYear() > getToday.yearToday) {
        elementPostListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard({ agenda, date, time })}`;
      } else if (waktuKegiatan.getMonth() + 1 >= getToday.monthToday
        && waktuKegiatan.getDate() >= getToday.dateToday) {
        elementPostListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard({ agenda, date, time })}`;
      }
    }
  }
};

export default showListFilteredAgenda;
