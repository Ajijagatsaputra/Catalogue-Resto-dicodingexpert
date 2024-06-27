import FavoriteRestaurantIndexDB from '../data/favorite-restaurantidb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ LikeContainer, restaurant }) {
    this._LikeContainer = LikeContainer;
    this._resto = restaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIndexDB.getRestaurant(id);
    return !!restaurant;
  },
  _renderLike() {
    this._LikeContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      console.log(this._resto);
      await FavoriteRestaurantIndexDB.putRestaurant(this._resto);
      await this._renderButton();
    });
  },
  _renderLiked() {
    this._LikeContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      console.log('liked');
      await FavoriteRestaurantIndexDB.deleteRestaurant(this._resto.id);
      await this._renderButton();
    });
  },
};
export default LikeButtonInitiator;
