import popupDetailKegiatan from '../templates/popup';
import UrlParser from '../../routes/url-parser';
import AgendaSource from '../../data/api-source';

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
    const { data } = responseJson;
    console.log(data);

    const popupDetail = document.querySelector('.popup-detail');

    popupDetail.innerHTML = `${popupDetailKegiatan(this._myPath)}`;

    const popup = document.getElementById('popup-detail_container');
    const span = document.getElementsByClassName('close')[0];

    popup.style.display = 'block';

    span.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  },
};

export default PopupDetailAgenda;
