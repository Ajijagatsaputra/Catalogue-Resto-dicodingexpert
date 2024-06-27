import RestaurantSource from '../../data/restaurantidb-source';
import { createItemRestaurant } from '../templates/template-creator';

const Index = {
  async render() {
    return `
      <!-- Start Jumbotron Section -->
      <section id="jumbotron">
        <picture class="jumbotron__bg">
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <source type="image/webp" srcset="./images/heros/hero-image_2.webp">
          <source type="image/jpeg" srcset="./images/heros/hero-image_2.jpg">
          <img src="./images/heros/hero-image_2.jpg" alt="restaurant banner">
        </picture>
        <div class="jumbotron__desc">
        </div>
        <div class="jumbotron__overlay"></div>
      </section>
      <!-- End Jumbotron Section -->
      <!-- Start RestaurantList Section -->
      <section id="restaurant">
        <h1 tabindex="0">Daftar Resto</h1>
        <!-- Start Restaurant List Section -->
        <section class="restaurant__list">
        <!-- End Restaurant List Section -->
        </section>
      </section>
      <!-- End RestaurantList Section -->
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('.restaurant__list');
    const restaurant = await RestaurantSource.favoriteRestaurant();

    restaurant.forEach((restaurants) => {
      restaurantList.innerHTML += createItemRestaurant(restaurants);
    });
  },
};

export default Index;
