const CreateAgendaItem = {
  agendaItemCard: ({ agenda, date, time }) => `
  <article class="item-agenda-kegiatan shadow">
    <img class="lazyload list-img-agenda-kegiatan" data-src="${agenda.foto_kegiatan}" alt="gambar list agenda">
    <section class="item-riwayat-article">
      <a href="#/detail-kegiatan/${agenda.id_kegiatan}" class="nama_kegiatan">
        <h3>${agenda.nama_kegiatan}</h3>
      </a>
      <section class="content-riwayat-article">
        <p class="desc-kegiatan">${agenda.deskripsi_kegiatan}</p>
        <section class="waktu-kegiatan-agenda">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-calendar icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            ${date}
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-clock icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            ${time} WITA - Selesai
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-geo-alt icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            ${agenda.tempat_kegiatan}
          </p>
        </section>
      </section>
    </section>
  </article>`,

  riwayatAgendaItemCard: ({ agenda, date, time }) => `
  <article class="item-riwayat-kegiatan shadow">
    <img class="lazyload list-img-riwayat-kegiatan" data-src="${agenda.foto_kegiatan}" alt="gambar list riwayat">
    <section class="item-riwayat-article">
      <a href="#/detail-kegiatan/${agenda.id_kegiatan}">
        <h3>${agenda.nama_kegiatan}</h3>
      </a>
      <section class="content-riwayat-article">
        <p class="desc-kegiatan">${agenda.deskripsi_kegiatan}</p>
        <section class="waktu-kegiatan">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-calendar icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            ${date}
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-clock icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            ${time} WITA - Selesai
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi-geo-alt icon-waktu-kegiatan" viewBox="0 0 16 16">
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            ${agenda.tempat_kegiatan}
          </p>
        </section>
      </section>
    </section>
  </article>
  `,
};

export default CreateAgendaItem;
