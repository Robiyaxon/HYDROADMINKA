import { globalAPI } from "../api/api"
import { contactAPI } from './../api/contactApi';

const GET_CONTACT = '/contact/GET_CONTACT'

const initialState = {
    title_uz: 'dfgd',
    title_krl: 'title_krl',
    title_ru: 'title_ru',
    title_en: 'title_en',
    photoUrl: 'photoUrl'
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

export const setContactHeaderAC = (title_uz, title_en, title_krl, title_ru, photoUrl) => ({
    type: GET_CONTACT, payload:
        { title_uz, title_krl, title_en, title_ru, photoUrl }
});


export const getContactHeader = () => (dispatch) => {
    return contactAPI.setContactHeader()
        .then(res => {
            dispatch(setContactHeaderAC(res[0].title_uz, res[0].title_en, res[0].title_krl, res[0].title_ru, res[0].photoUrl));
            console.log(res[0]);
        });
}

// export const upLoadContactHeader = (title_uz, title_ru, title_en, photoUrl) => (dispatch) => {
//     return contactAPI.upDateContactHeader(title_uz, title_ru, title_en, photoUrl,)
//         .then(res => {
//             let { title_uz, title_ru, title_en, photoUrl } = res;
//             dispatch(setContactHeaderAC(title_uz, title_ru, title_en, photoUrl));
//         });
// }

// export const getContactHeaderImageUpdate = (data) => async (dispatch) => {
//     let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
//         .then(response => {
//             return response;
//         });

//     let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
//     data.photoUrl = path;

//     return await contactAPI.upDateContactHeader(data).then(response => {
//         dispatch(getContactHeader());
//     });
// }
