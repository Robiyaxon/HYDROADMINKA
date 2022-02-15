import { globalAPI } from "../api/api"
import { contactAPI } from '../api/contactApi';

const GET_CONTACT = '/contact/GET_CONTACT'
const UPDATE_CONTACT_HEADER_TEXT = '/contact/UPDATE_CONTACT_HEADER_TEXT'
const UPDATE_CONTACT_HEADER_PHOTO = '/contact/UPDATE_CONTACT_HEADER_PHOTO'

const initialState = {
    title_uz: '',
    title_krl: '',
    title_ru: '',
    title_en: '',
    photoUrl: ''
}

export const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACT:

            return {
                ...state,
                ...action.payload
            }
        case UPDATE_CONTACT_HEADER_TEXT:
            return { ...state, title_uz: action.title_uz }
        case UPDATE_CONTACT_HEADER_PHOTO:
            return { ...state, photoUrl: action.photoUrl }

        default:
            return state
    }
}

export const setContactHeaderAC = (title_uz, title_en, title_krl, title_ru, photoUrl) => ({
    type: GET_CONTACT, payload:
        { title_uz, title_krl, title_en, title_ru, photoUrl }
});
export const upDateContactHeaderTextAC = (title_uz) => ({
    type: UPDATE_CONTACT_HEADER_TEXT, title_uz
});
export const upDateContactHeaderPhotoUrlAC = (photoUrl) => ({
    type: UPDATE_CONTACT_HEADER_PHOTO, photoUrl
});


export const getContactHeader = () => (dispatch) => {
    return contactAPI.setContactHeader()
        .then(res => {
            dispatch(setContactHeaderAC(res[0].title_uz, res[0].title_en, res[0].title_krl, res[0].title_ru, res[0].photoUrl));
            console.log(res[0]);
        });
}

export const upDateContactHeaderText = (title_uz) => (dispatch) => {
    dispatch(upDateContactHeaderTextAC(title_uz));
    return contactAPI.upDateContactHeader(title_uz)
        .then(res => {
            console.log(res);
        });
}

export const upDateContactHeaderPhoto = (photo) => (dispatch) => {
    dispatch(upDateContactHeaderPhotoUrlAC(photo))
    // return globalAPI.uploadImage(photo)
        // .then(res => {
            // console.log(res);
        // });
}