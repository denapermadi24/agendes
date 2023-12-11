// import { createRestaurantItemTemplate } from '../templates/templates-creator';

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
              <input type="text" id="username" name="username" placeholder="Username" required>
              <input type="password" id="password" name="password" placeholder="Password" required>
          </div>
          <br>
          <button>Login</button>
      </div>

  </div>
    `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default AdminLogin;
