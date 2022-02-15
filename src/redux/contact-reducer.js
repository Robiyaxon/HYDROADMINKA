import { contactAPI } from "../api/contactApi"

const GET_CONTACT = '/contact/GET_CONTACT'

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

        default:
            return state
    }
}

export const setContactHeaderAC = (title_uz, title_ru, title_en, photoUrl) => ({
    type: GET_CONTACT, payload:
        { title_uz, title_ru, title_en, photoUrl }
});

export const getContactHeader = (title_uz, title_ru, title_en, photoUrl) => (dispatch) => {
    return contactAPI.upDateContactHeader(title_uz, title_ru, title_en, photoUrl)
        .then(res => {
            let { title_uz, title_ru, title_en, photoUrl } = res;
            dispatch(setAuthUserData(title_uz, title_ru, title_en, photoUrl));
        });
}