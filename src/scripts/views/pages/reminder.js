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
        const data = responseJson.data[0];
        console.log(data);

        const popupReminder = document.querySelector('#overlay');

        popupReminder.innerHTML = `${templateReminder(data)}`;
    },
};

export default PopUpReminder;
