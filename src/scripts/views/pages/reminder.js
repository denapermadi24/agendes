// Import statements here...
import UrlParser from '../../routes/url-parser';
import AgendaSource from '../../data/api-source';
import templateReminder from '../templates/template-reminder';
import Swal from 'sweetalert2';

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
      submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default form submission
        saveReminder(data);
      });
    } else {
      console.error('Error: Could not find the overlay element');
    }
  },
};

// Function to save the reminder data
async function saveReminder(data) {
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
  const reminderData = {
    nama_user: name,
    email_user: email,
  };

  try {
    // Log the payload before sending the request
    console.log('POST Request Payload:', JSON.stringify(reminderData));

    const response = await fetch('https://agendes-back-end.vercel.app/reminder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reminderData),
    });

    if (response.ok) {
      // Show success message with SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Reminder saved successfully',
      });
    } else {
      // Show error message with SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to save reminder',
      });
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
