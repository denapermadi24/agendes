const TemplateUserReminder = (user) => `
    <section class="user-reminder shadow">
      <a href="#/detail-kegiatan/${user.id_kegiatan}">
        <h4>${user.nama_kegiatan}</h4>
      </a>
      <p class="name-user">${user.nama_user}</p>
      <p>${user.email_user}</p>
    </section>`;

export default TemplateUserReminder;
