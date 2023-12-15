import popupDetailKegiatan from '../templates/popup';
import UrlParser from '../../routes/url-parser';
import AgendaSource from '../../data/api-source';
import templateReminder from '../templates/template-reminder';

const PopUpReminder = {
    async renderPageContent() {
        return `
    <div class="popup-detail" id="overlay">
    
    </div>
      `;
    },

    async applyDataContent() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const responseJson = await AgendaSource.detailAgenda(url.id);
        const { data } = responseJson;
        console.log(data);

        const popupReminder = document.querySelector('#overlay');

        popupReminder.innerHTML = `${templateReminder()}`;

        // const popup = document.getElementById('popup-detail_container');
        // const span = document.getElementsByClassName('close')[0];

        // popup.style.display = 'block';

        // span.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });
    },
};

export default PopUpReminder;
