import popupDetailKegiatan from '../templates/popup';
import UrlParser from '../../routes/url-parser';
import AgendaSource from '../../data/api-source';
import FormatDateTime from '../../utils/format-date-time';

const PopupDetailAgenda = {
  _myPath: '',

  path(myPath) {
    this._myPath = myPath;
  },

  async renderPageContent() {
    return `
      <div id="popup-detail_container" class="popup-detail">
        
      </div>
      `;
  },

  async applyDataContent() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const responseJson = await AgendaSource.detailAgenda(url.id);
    const data = responseJson.data[0];

    const waktuKegiatan = new Date(data.waktu);
    // Mengatur waktu agar sama dengan inputan user
    waktuKegiatan.setMinutes(waktuKegiatan.getMinutes() + waktuKegiatan.getTimezoneOffset());
    const date = FormatDateTime.formatDate.format(waktuKegiatan);
    const time = FormatDateTime.formatTime.format(waktuKegiatan);

    const popupDetail = document.querySelector('.popup-detail');

    popupDetail.innerHTML = `${popupDetailKegiatan(this._myPath, { data, date, time })}`;

    const btnIkutiKegiatan = document.querySelector('#ikuti-kegiatan');
    if (this._myPath === '#/riwayat-agenda') {
      btnIkutiKegiatan.remove();
    }

    const popup = document.getElementById('popup-detail_container');
    const span = document.getElementsByClassName('close')[0];

    popup.style.display = 'block';

    span.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  },
};

export default PopupDetailAgenda;
