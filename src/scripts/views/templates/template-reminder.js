const templateReminder = (data) => `
  <article class="popup-reminder-content">
    <header>
      <h1>Aktifkan Reminder</h1>
      <a href="#/detail-kegiatan/${data.id_kegiatan}" class="close">&times;</a>
    </header>
    <section class="input_reminder">
      <form id="reminderForm">
        <div class="input">
          <label for="name">Nama</label>
          <input id="name" type="text" name="name" required>
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" required>
        </div>
        <button type="submit" id="submit-reminder" class="shadow btn-animation">Kirim</button>
      </form>
    </section>
  </article>`;

export default templateReminder;
