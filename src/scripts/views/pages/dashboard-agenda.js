import AgendaSource from '../../data/api-source';
import TemplateUserReminder from '../templates/template-user-reminder';
import PopupDetailAgenda from './popup-detail';

const DashboardAdmin = {
  async renderPageContent() {
    return `
    <div class="container container-top shadow">
      <div class="desc_hero">
        <div class="hero_title">
          <h1>Tambahkan Jadwal Kegiatan Desa Anda Dengan AgenDes</h1>
        </div>
        <div class="hero_subtitle">
          <p>Jadikan setiap kegiatan desa lebih terkoordinasi dan terstruktur. Mari membangun desa anda dan wujudkan
            solidaritas bersama AgenDes. Yuk gunakan AgenDes sekarang!
          </p>
          <a class="exchange_button" href="#/agenda-kegiatan">
            Cek Agenda
          </a>
        </div>
      </div>
      <img class="image_hero" src="./hero-beranda.png" alt="Hero" />
    </div>

    <div class="main-content-container">
      <div class="container-post-kegiatan">
        <div class="post-kegiatan">
          <div class="form-post-kegiatan">
            <section class="input_section shadow">
              <h2>Post Kegiatan</h2>
              <form id="input-kegiatan">
                <div class="input">
                  <label for="nama-kegiatan">Nama Kegiatan</label>
                  <input id="nama-kegiatan" type="text" required>
                </div>
                <div class="input">
                  <label for="tempat">Tempat Kegiatan</label>
                  <input id="tempat" type="text" required>
                </div>
                <div class="input">
                  <label for="option-kegiatan">Jenis Kegiatan</label>
                  <select id="option-kegiatan">
                    <option value="Gotong Royong">Gotong Royong</option>
                    <option value="Rapat/Musyawarah">Rapat/Musyawarah</option>
                    <option value="Posyandu">Posyandu</option>
                    <option value="Kesehatan">Kesehatan</option>
                    <option value="Lomba">Lomba</option>
                    <option value="Bantuan">Bantuan</option>
                  </select>
                </div>
                <div class="input">
                  <label for="tanggal">Tanggal Kegiatan</label>
                  <input id="tanggal" type="date" required>
                </div>
                <div class="input">
                  <label for="waktu">Waktu Kegiatan</label>
                  <input id="waktu" type="time" required>
                </div>
                <div class="input">
                  <label for="deskripsi-kegiatan">Deskripsi Kegiatan</label>
                  <textarea id="deskripsi-kegiatan" rows="2" placeholder="Tuliskan deskripsi kegiatan Anda di sini!"
                    maxlength="160" required></textarea>
                </div>
                <div class="input input-img_kegiatan">
                  <label for="img-kegiatan">Gambar Kegiatan</label>
                  <input id="img-kegiatan" type="file" accept="image/*" required>
                </div>
                <button id="submit-kegiatan" class="shadow btn-animation" type="submit">SUBMIT</button>
              </form>
            </section>
          </div>
        </div>
        <div class="maincontent shadow" id="maincontent">
          <div class="deskripsi_container shadow">
            <div class="tentangkami">
              <h2>Perhatian!!!</h2>
            </div>
            <div class="deskripsi_paragraf">
              <p>
                Setelah anda selesai menambah kegiatan baru, periksalah pada bagian agenda untuk memastikan apakah
                kegiatan yang baru anda buat telah berhasil tesimpan.
              </p>
            </div>
          </div>
        </div>
        <article class="container_reminder shadow">
          <section>
            <h2>Daftar Reminder Agenda</h2>
          </section>
          <article id="container_user-reminder">
          
          </article>
        </article>

        
      </div>
  `;
  },

  async applyDataContent() {
    const listReminder = await AgendaSource.listReminder();
    const latestListReminder = [...listReminder].reverse();

    const containerUserReminder = document.getElementById('container_user-reminder');

    latestListReminder.forEach((user) => {
      containerUserReminder.innerHTML += `${TemplateUserReminder(user)}`;
    });

    PopupDetailAgenda.path('#/admin');

    // Add event listener for form submission
    const form = document.getElementById('input-kegiatan');
    form.addEventListener('submit', handleFormSubmission);
  },

  async afterRender() {
    const tombolSubmit = document.querySelector('#submit-kegiatan');
    const inputKegiatan = document.querySelector('#nama-kegiatan');
    const inputDeskripsi = document.querySelector('#deskripsi-kegiatan');
    const inputTempat = document.querySelector('#tempat');
    const inputJenis = document.querySelector('#option-kegiatan');
    const inputTanggal = document.querySelector('#tanggal');
    const inputWaktu = document.querySelector('#waktu');
    const inputGambar = document.querySelector('#img-kegiatan');

    tombolSubmit.addEventListener('click', async (e) => {
      e.preventDefault();

      const apiEndpoint = 'https://agendes-back-end.vercel.app/agenda';

      const formData = new FormData();

      formData.append('nama_kegiatan', `${inputKegiatan.value}`);
      formData.append('deskripsi_kegiatan', `${inputDeskripsi.value}`);
      formData.append('tempat_kegiatan', `${inputTempat.value}`);
      formData.append('jenis_kegiatan', `${inputJenis.value}`);
      formData.append('waktu', `${inputTanggal.value} ${inputWaktu.value}`);
      formData.append('tambahan', 'test');
      formData.append('foto_kegiatan', inputGambar.files[0]);

      try {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Agenda Added',
          text: 'The agenda has been added successfully!',
        });

        console.log('Response Data:', responseData);
      } catch (error) {
        // Show error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Failed to Add Agenda',
          text: error.message || 'There was an error while adding the agenda. Please try again.',
        });

        console.error('Error:', error.message);
      }
    });
  },
};

// Handle form submission
async function handleFormSubmission(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);

  // Convert FormData to an object
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  try {
    // Send data to the API endpoint

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Parse the response
    const result = await response.json();

    return result;
  } catch (error) {
    // Show error message using SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred. Please try again later.',
    });
    console.error('Error during agenda submission:', error.message);
  }
}

// Mock function to simulate API call
async function addAgenda(data) {
  // Use fetch or any other mechanism to send data to the API endpoint
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Parse the response
  const result = await response.json();

  return result;
}

export default DashboardAdmin;
