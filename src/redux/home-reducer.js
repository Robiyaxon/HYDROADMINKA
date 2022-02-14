import { globalAPI, homeApi } from "../api/api";

const SET_HOME_CAROUSEL_IMAGES = 'SET_HOME_CAROUSEL_IMAGES';
const SET_HOME_CAROUSEL_IMAGE_UPDATE = 'SET_HOME_CAROUSEL_IMAGE_UPDATE';

let initialState = {
    images: null,
};


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_CAROUSEL_IMAGES:
            return {
                ...state,
                images: action.images
            }
        default:
            return state;
    }
}
export const setHomeCarouselImagesData = (images) => ({type: SET_HOME_CAROUSEL_IMAGES, images });
export const setHomeCarouselImageUpdateData = (data) => ({type: SET_HOME_CAROUSEL_IMAGE_UPDATE, data });
export const getCarouselImages = () => (dispatch) => {
    return homeApi.setCarousel()
        .then(response => {
            dispatch(setHomeCarouselImagesData(response));
    });
}
export const getCarouselImageUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateImage(data).then(response => {
        dispatch(getCarouselImages());
    });
}

export default homeReducer;