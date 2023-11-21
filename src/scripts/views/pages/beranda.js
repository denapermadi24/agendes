// import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Beranda = {
  async renderPageContent() {
    return `
    <section class="content">
    <h2>Beranda tadaa</h2>
    <section class="posts-content">
    </section>
  </section>
  `;
  },

  async applyDataContent() {
    // TODO: Isi data halaman
  },
};

export default Beranda;
