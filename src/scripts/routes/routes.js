import RestaurantDetail from '../views/pages/detail';
import Index from '../views/pages/home';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': Index,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': RestaurantDetail,
};
export default routes;
