import FavoriteRestaurantIndexDB from '../../data/favorite-restaurantidb';
import { createItemRestaurant } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
      <section id="restaurant" tabindex="0">
        <h1 tabindex="0">Daftar Resto Favorite</h1>
        <section class="restaurant__list">
        </section>
      </section>
    `;
  },
  async afterRender() {
    const restaurant = await FavoriteRestaurantIndexDB.getAllRestaurant();
    const restaurantContainer = document.querySelector('.restaurant__list');

    if (restaurant.length === 0) {
      restaurantContainer.innerHTML
        += '<p class="restaurant-item__empty" style="color:red;">Anda belum memiliki daftar restoran favorit?</p>';
    }
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createItemRestaurant(restaurants);
    });
  },
};

export default FavoriteRestaurant;
