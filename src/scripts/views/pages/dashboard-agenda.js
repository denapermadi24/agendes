const apiEndpoint = 'https://agendes-back-end.vercel.app/agenda';

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
    const response = await addAgenda(formDataObject);

    // Check if the request was successful
    if (response.success) {
      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Agenda Added',
        text: 'The agenda has been added successfully!',
      });
      // Handle success, you may want to show a success message or redirect
      console.log('Agenda added successfully!');
    } else {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Failed to Add Agenda',
        text: response.message || 'There was an error while adding the agenda. Please try again.',
      });
      // Handle error, you may want to show an error message
      console.error('Failed to add agenda:', response.message || 'Unknown error');
    }
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
          <a class="exchange_button" href="#/agenda">
            Tambah Agenda
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
                <label for="deskripsi-kegiatan">Deskripsi Kegiatan</label>
                <input id="deskripsi-kegiatan" type="text" required>
              </div>
              <div class="input">
                <label for="tempat">Tempat Kegiatan</label>
                <input id="tempat" type="text" required>
              </div>
              <div class="input">
              <label for="option-kegiatan">Jenis Kegiatan</label>
                <select id="option-kegiatan">
                  <option value="renovasi-masjid">Renovasi masjid</option>
                  <option value="pembersihan-sungai">Pembersihan sungai</option>
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
    </div>

    <div class="maincontent shadow" id="maincontent">
      <div class="tukar_container container">
        <div class="desc_hero">
          <div class="hero_title">
            <h2>Ingin Melihat Kegiatan Sebelumnya?</h2>
          </div>
          <div class="hero_subtitle">
            Anda ingin melihat kegiatan sebelumnya? Tenang! kami menyediakan informasi histori
            kegiatan desa yang sudah berlalu. Yuk! segera cek riwayat kegiatan sebagai arsip
            atau evaluasi untuk masa depan!
            <a class="exchange_button" href="#/riwayat-agenda">
              Cek Riwayat
            </a>
          </div>
        </div>
        <img class="image_hero image_hero_cek_kegiatan" src="./cek-riwayat.png" alt="Hero"/>
      </div>
    </div>
    </div>
  `;
  },

  async applyDataContent() {
    // Add event listener for form submission
    const form = document.getElementById('input-kegiatan');
    form.addEventListener('submit', handleFormSubmission);
  },
};

export default DashboardAdmin;
