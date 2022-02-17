import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';

const SET_CONTACT_IMAGES = '/contact/SET_CONTACT_IMAGES';

let initialState = {
    images: null,
};


export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_IMAGES:
            return {
                ...state,
                images: action.images
            }
        default:
            return state;
    }
}

export const setContactImagesData = (images) => ({ type: SET_CONTACT_IMAGES, images });

export const getContactImages = () => (dispatch) => {
    return contactAPI.setContact()
        .then(res => {
            dispatch(setContactImagesData(res));
        });
}
export const getContactImageCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await contactAPI.setCreateContact(data).then(res => {
        dispatch(getContactImages());
    });
}
export const getContactImageUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await contactAPI.setUpdateContact(data).then(res => {
        dispatch(getContactImages());
    });
}