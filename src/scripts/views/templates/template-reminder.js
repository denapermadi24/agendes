import Swal from 'sweetalert2';

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
        <button id="submit-reminder" class="shadow btn-animation" type="submit">Kirim</button>
      </form>
    </section>
  </article>`;

// // Function to handle form submission
// async function saveReminder(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get form data
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

//   // Simple email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     // Show an error message
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'Please enter a valid email address',
//     });
//     // End the function early if validation fails
//     return;
//   }

//   // Prepare data for the POST request
//   const reminderData = {
//     name: name,
//     email: email,
//     // Add any other data you want to send to the API
//   };

//   try {
//     const response = await fetch('https://agendes-back-end.vercel.app/reminder', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(reminderData),
//     });

//     if (response.ok) {
//       // Show success message with SweetAlert2
//       Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: 'Reminder saved successfully',
//       });
//     } else {
//       // Show error message with SweetAlert2
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to save reminder',
//       });
//     }
//   } catch (error) {
//     // Show error message with SweetAlert2
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: `An error occurred: ${error.message}`,
//     });
//   }
// }

// // Use DOMContentLoaded event to ensure the entire page content is loaded
// document.addEventListener('DOMContentLoaded', function () {
//   const popupReminder = document.querySelector('.popup-reminder-content');

//   if (popupReminder) {
//     // Add an event listener for form submission (event delegation)
//     popupReminder.addEventListener('submit', function (event) {
//       if (event.target.id === 'reminderForm') {
//         saveReminder(event);
//       }
//     });
//   } else {
//     console.error('Error: Could not find the popup-reminder-content element');
//   }
// });

export default templateReminder;
