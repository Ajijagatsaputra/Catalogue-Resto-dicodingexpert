import createLikeBtnPresentRestaurant from './testFactories';
import FavoriteRestaurantIndexDB from '../src/scripts/data/favorite-restaurantidb';

describe('Adding Favorite Restaurant', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="LikeContainer"></div>';
    });

    afterEach(async () => {
        await FavoriteRestaurantIndexDB.deleteRestaurant(1);
    });

    it('should display a like button when the restaurant has never been liked before', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        expect(
            document.querySelector('[aria-label="like this restaurant"]')
        ).toBeTruthy();
    });

    it('should not display the unlike button when the restaurant has never been liked before', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant"]'));
    });

    it('should be able to like restaurat', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurantIndexDB.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });
    });

    it('should not add a restaurant again when its already liked before', async () => {
        await createLikeBtnPresentRestaurant({ id: 1 });
        await FavoriteRestaurantIndexDB.putRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIndexDB.getAllRestaurant()).toEqual([
            { id: 1 },
        ]);
    });
});
