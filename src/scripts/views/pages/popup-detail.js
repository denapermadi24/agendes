import popupDetailKegiatan from '../templates/popup';

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
