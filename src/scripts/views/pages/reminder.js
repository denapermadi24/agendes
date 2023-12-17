// Import statements here...
import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import AgendaSource from '../../data/api-source';
import templateReminder from '../templates/template-reminder';

const PopUpReminder = {
  async renderPageContent() {
    return `
      <div class="popup-detail" id="overlay"></div>
    `;
  },

  async applyDataContent() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const responseJson = await AgendaSource.detailAgenda(url.id);
    const data = responseJson.data[0];

    const popupReminder = document.querySelector('#overlay');

    if (popupReminder) {
      popupReminder.innerHTML = templateReminder(data);

      // Add event listener for the button
      const submitButton = document.getElementById('submit-reminder');
      submitButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent the default form submission
        await saveReminder();
      });
    } else {
      console.error('Error: Could not find the overlay element');
    }
  },
};

// Function to save the reminder data
async function saveReminder() {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Log data for debugging
  console.log('Reminder Data:', { name, email });

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    // Show an error message
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please enter a valid email address',
    });
    return;
  }

  // Prepare data for the POST request
  const postReminderData = {
    postToUser: {
      nama_user: name,
      email_user: email,
    },
  };

  try {
    // Log the payload before sending the request
    console.log('POST Request Payload:', JSON.stringify(postReminderData.postToUser));

    const response = await fetch('https://agendes-back-end.vercel.app/reminder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postReminderData.postToUser),
    });
    console.log('====== User Reminder =======');
    console.log(response);

    const responseEmail = await fetch(`https://agendes-back-end.vercel.app/reminder-byemail/${email}`);
    const responseJsonEmail = await responseEmail.json();
    const dataUserEmail = responseJsonEmail.data;

    const listReminder = await AgendaSource.listReminder();

    // Memeriksa inputan user dengan data API list Reminder apakah
    // sudah ada orang dengan nama, email dan id kegiatan yg sama
    const cekPendaftaran = listReminder.find((item) => item.nama_user.toLowerCase()
      === name.toLowerCase() && item.email_user.toLowerCase()
      === email.toLowerCase() && item.id_kegiatan === parseInt(url.id, 10));

    // Memeriksa inputan user dengan data API list User Reminder apakah
    // sudah ada orang dengan nama, email dan id kegiatan yg sama
    const cekEmailPendaftar = dataUserEmail.find((user) => user.nama_user.toLowerCase()
      === name.toLowerCase() && user.email_user.toLowerCase() === email.toLowerCase());

    if (cekPendaftaran) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Anda sudah terdaftar pada kegiatan ini!',
      });
    } else {
      const responsePostReminder = await fetch('https://agendes-back-end.vercel.app/reminder-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_kegiatan: parseInt(url.id, 10),
          id_reminder: cekEmailPendaftar.id_reminder,
        }),
      });

      if (responsePostReminder.ok) {
        // Show success message with SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Anda berhasil mendaftar pada kegiatan ini!',
        });
      } else {
        // Show error message with SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Server Error, Anda gagal mendaftar pada kegiatan ini!',
        });
      }
    }
  } catch (error) {
    // Show error message with SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: `An error occurred: ${error.message}`,
    });
  }
}

export default PopUpReminder;
