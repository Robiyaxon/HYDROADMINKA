import { aboutAPI } from "../api/api";

const SET_ABOUT_API_DATA = 'SET_ABOUT_API_DATA';
const SET_ABOUT_API_DATA_DELETE = 'SET_ABOUT_API_DATA_DELETE';


let initialState = {
    aboutData: null,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ABOUT_API_DATA:
            return {
                ...state,
                aboutData: action.aboutData
            }
        case SET_ABOUT_API_DATA_DELETE:
            let aboutData = [ ...state.aboutData ];
            aboutData = aboutData.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                aboutData
            }
        default:
            return state;
    }
}

// export const setHomeCarouselImagesData = (images) => ({type: SET_HOME_CAROUSEL_IMAGES, images });
// export const setHomeCarouselImageDeleteData = (id) => ({type: SET_HOME_CAROUSEL_IMAGE_DELETE, id });