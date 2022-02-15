import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';

const SET_CONTACT_HEADER = '/conatct/SET_CONTACT_HEADER';
const SET_CONTACT_HEADER_IMAGE_UPDATE = '/conatct/SET_HOME_CAROUSEL_IMAGE_UPDATE';

let initialState = {
    images: null,
};


export const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_HEADER:
            return {
                ...state,
                images: action.images
            }
        default:
            return state;
    }
}
export const setContactHeaderImageAC = (images) => ({type: SET_CONTACT_HEADER, images });
export const setContactHeaderAC = (data) => ({type: SET_CONTACT_HEADER_IMAGE_UPDATE, data });
export const getContactHeader = () => (dispatch) => {
    return contactAPI.setContactHeader()
        .then(response => {
            dispatch(setContactHeaderAC(response));
    });
}
export const getContactHeaderUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await contactAPI.upDateContactHeader(data).then(response => {
        dispatch(getContactHeader());
    });
}