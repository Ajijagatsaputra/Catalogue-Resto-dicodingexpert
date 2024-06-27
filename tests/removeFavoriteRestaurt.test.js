import { doc } from 'prettier';
import FavoriteRestaurantIndexDB from '../src/scripts/data/favorite-restaurantidb';
import createLikeBtnPresentRestaurant from './testFactories';

describe('Removing Favorite Restaurant', () => {
    beforeEach(async () => {
        document.body.innerHTML = '<div id="LikeContainer"></div>';
        await FavoriteRestaurantIndexDB.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantIndexDB.deleteRestaurant(1);
    });

    it('should display unlike widget when the restaurant has bee liked', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        expect(
            document.querySelector('[aria-label="unlike this restaurant"]')
        ).toBeTruthy();
    });

    it('should not display unlike widget when the restaurant has been liked', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        expect(
            document.querySelector('[aria-label="like the restaurant"]')
        ).toBeFalsy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        document
            .querySelector('[aria-label="unlike this restaurant"]')
            .dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIndexDB.getAllRestaurant()).toEqual([]);
    });
});
