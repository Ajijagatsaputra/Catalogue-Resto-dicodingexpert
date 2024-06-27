import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

const createLikeBtnPresentRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        restaurant,
        LikeContainer: document.querySelector('#LikeContainer'),
    });
};

export default createLikeBtnPresentRestaurant;
