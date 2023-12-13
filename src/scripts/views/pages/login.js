// ... (existing code)

const AdminLogin = {
  async renderPageContent() {
    return `
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1>Welcome To</h1>
            <h1>AgenDes</h1>
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
    // Attach the event listener after rendering the page content
    console.log('Applying data content...');
    document.getElementById('loginButton').addEventListener('click', login);

    window.logout = logout;
  },
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded');
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
  // Update navigation menu after successful login
  document.getElementById('adminDashboard').innerHTML = '<a class="nav__item" href="#/admin">Dashboard</a>';
  document.getElementById('adminDashboardFooter').innerHTML = '<a href="#/admin">Dashboard</a>';
  document.getElementById('admin').innerHTML = '<a class="nav__itemadmn" href="#" onclick="logout()">Logout</a>';
  document.getElementById('adminFooterLink').innerHTML = '<a href="#" onclick="logout()">Logout</a>';
}

async function logout() {
  try {
    // Perform logout actions
    // For example, clear any user session data

    // Update navigation menu after logout
    document.getElementById('adminDashboard').innerHTML = '<a class="nav__item" href="#/">Beranda</a>';
    document.getElementById('adminDashboardFooter').innerHTML = '<a href="#/">Beranda</a>'; // You may want to clear the footer link as well
    document.getElementById('admin').innerHTML = '<a class="nav__itemadmn" href="#/login">Admin</a>';
    document.getElementById('adminFooterLink').innerHTML = '<a href="#/Login">Admin</a>'; // You may want to clear the footer link as well

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
