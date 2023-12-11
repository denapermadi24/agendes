import PopupDetailAgenda from './popup-detail';
import AgendaSource from '../../data/api-source';
import CreateAgendaItem from '../templates/template-agenda-item';

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
      postListAgenda.innerHTML += `${CreateAgendaItem.agendaItemCard(agenda)}`;
    });

    PopupDetailAgenda.path('#/agenda-kegiatan');
  },

  // async afterRender() {
  //   let kegiatanValue;

  //   function getApiValue() {
  //     const endpoint = 'https://agendes-back-end.vercel.app/agenda';
  //     return fetch(endpoint)
  //       .then((result) => result.json())
  //       .then((responseJson) => responseJson.data)
  //       .then((value) => {
  //         kegiatanValue = value;
  //         console.log(kegiatanValue);
  //       });
  //   } 

  //   function render() {
  //     const listAgenda = document.querySelector('.list-agenda-kegiatan');

  //     kegiatanValue.forEach((element) => {
  //       const article = document.createElement('article');
  //       article.setAttribute('class', 'item-agenda-kegiatan shadow');

  //       let gambar = element.foto_kegiatan;
  //       const img = document.createElement('img');
  //       img.setAttribute('src', gambar);

  //       img.setAttribute('class', `list-img-agenda-kegiatan`);
  //       img.setAttribute('alt', 'gambar list agenda');

  //       const section = document.createElement('section');
  //       section.setAttribute('class', 'item-riwayat-article');

  //       article.appendChild(img);
  //       article.appendChild(section);

  //       const a = document.createElement('a');
  //       a.setAttribute('href', '#/detail-kegiatan');

  //       const p = document.createElement('p');
  //       const section2 = document.createElement('section');
  //       p.innerText = `${element.deskripsi_kegiatan}`;

  //       section.appendChild(a);
  //       section.appendChild(p);
  //       section.appendChild(section2);

  //       const h3 = document.createElement('h3');
  //       h3.innerText = `${element.nama_kegiatan}`;

  //       a.appendChild(h3);

  //       const p2 = document.createElement('p');

  //       p2.innerText = `${element.waktu}`;

  //       const svg = document.createElement('svg');

  //       svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  //       svg.setAttribute('width', '16');
  //       svg.setAttribute('height', '16');
  //       svg.setAttribute('fill', 'currentColor');
  //       svg.setAttribute('class', 'bi-calendar icon-waktu-kegiatan');
  //       svg.setAttribute('viewBox', '0 0 16 16');

  //       const path = document.createElement('path');

  //       path.setAttribute(
  //         'd',
  //         'M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z'
  //       );

  //       svg.appendChild(path);

  //       p2.appendChild(svg);

  //       const p3 = document.createElement('p');

  //       p3.innerText = `${element.tempat_kegiatan}`;
  //       const p4 = document.createElement('p');

  //       section2.appendChild(p2);
  //       section2.appendChild(p3);
  //       section2.appendChild(p4);

  //       console.log(article);

  //       listAgenda.appendChild(article);
  //     });
  //   }

  //   getApiValue().then(render);
  // },
};

export default AgendaKegiatan;
