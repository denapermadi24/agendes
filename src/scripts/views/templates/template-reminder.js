const templateReminder = (data) => `
<div class="popup">
<a href="#/detail-kegiatan/${data.id_kegiatan}" class="close-reminder">&times;</a>
<h2>Aktifkan Reminder</h2>
<form id="reminderForm" onsubmit="saveReminder(event)">
<label for="name">Nama:</label>
<input type="text" id="name" name="name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<button type="submit">Aktifkan Reminder</button>
</form>
</div>
`

export default templateReminder;

//<span class="close-reminder" onclick="closePopup()">&times;</span>