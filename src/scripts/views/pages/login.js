// ... (existing code)

const AdminLogin = {
  async renderPageContent() {
    return `
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1>Welcome To</h1>
            <img class="logo_login" src="./logo_white.png" alt="Hero" />
            <p>Makes it easier for you to schedule village activities!</p>
          </div>
        </div>

        <div class="right">
          <h1>Login</h1>
          <div class="inputs">
            <input type="text" id="email" name="email" placeholder="Email" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
          </div>
          <br>
          <button id="loginButton">Login</button>
        </div>
      </div>
    `;
  },

  async applyDataContent() {
    console.log('Applying data content...');

    // Check authentication status and update navigation menu
    await updateNavigationMenu();

    // Attach the event listener after rendering the page content
    const loginButton = document.getElementById('loginButton');

    if (loginButton) {
      loginButton.addEventListener('click', login);
    } else {
      console.error('Login button not found.');
    }

    window.logout = logout;
  },
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM is fully loaded');
  await updateNavigationMenu(); // Update navigation menu based on authentication status
  AdminLogin.applyDataContent();
});

async function login() {
  console.log('Attempting login...');
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Email:', email);
  console.log('Password:', password);

  try {
    const response = await fetch('https://agendes-back-end.vercel.app/auth/agendes/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('API Response:', response);

    const result = await response.json();
    console.log('Result:', result);

    if (result.success) {
      // Set authentication state in localStorage
      localStorage.setItem('authToken', result.token);

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Diarahkan Ke Halaman Admin Dashboard...',
      }).then(() => {
        // Update navigation menu after successful login
        updateNavigationMenu();

        // Redirect to admin dashboard
        window.location.href = '#/admin';
      });
    } else {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Email Atau Password Anda Salah...',
      });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
  }
}

function updateNavigationMenu() {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('authToken') !== null;

  // Update navigation menu based on authentication status
  const adminDashboardLink = document.getElementById('adminDashboard');
  const adminDashboardFooterLink = document.getElementById('adminDashboardFooter');
  const adminLink = document.getElementById('admin');
  const adminFooterLink = document.getElementById('adminFooterLink');

  if (isAuthenticated) {
    // User is authenticated
    adminDashboardLink.innerHTML = '<a class="nav__item" href="#/admin">Dashboard</a>';
    adminDashboardFooterLink.innerHTML = '<a href="#/admin">Dashboard</a>';

    if (adminLink) {
      adminLink.innerHTML = '<a class="nav__itemadmn" href="#">Logout</a>';
      if (typeof logout === 'function') {
        adminLink.addEventListener('click', logout);
      }
    }

    if (adminFooterLink) {
      adminFooterLink.innerHTML = '<a href="#">Logout</a>';
      if (typeof logout === 'function') {
        adminFooterLink.addEventListener('click', logout);
      }
    }
  } else {
    // User is not authenticated
    adminDashboardLink.innerHTML = '<a class="nav__item" href="#/">Beranda</a>';
    adminDashboardFooterLink.innerHTML = '<a href="#/">Beranda</a>';

    if (adminLink) {
      adminLink.innerHTML = '<a class="nav__itemadmn" href="#/login">Admin</a>';
      if (typeof login === 'function') {
        adminLink.removeEventListener('click', logout);
      }
    }

    if (adminFooterLink) {
      adminFooterLink.innerHTML = '<a href="#/Login">Admin</a>';
      if (typeof login === 'function') {
        adminFooterLink.removeEventListener('click', logout);
      }
    }
  }
}

async function logout() {
  try {
    // Perform logout actions
    // For example, clear any user session data

    // Clear authentication state in localStorage
    localStorage.removeItem('authToken');

    // Update navigation menu after logout
    updateNavigationMenu();

    // Show success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful',
      text: 'You have been logged out successfully!',
    }).then(() => {
      // Redirect to home page after logout
      window.location.href = '#/login';
    });
  } catch (error) {
    // Show error message using SweetAlert if logout fails
    Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: 'An error occurred during logout. Please try again.',
    });
    console.error('Error during logout:', error.message);
  }
}

// Export the AdminLogin module
export default AdminLogin;
