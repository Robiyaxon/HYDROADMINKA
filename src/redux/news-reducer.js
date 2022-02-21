import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';
import { newsAPI } from './../api/newsApi';

const SET_NEWS = '/news/SET_NEWS';

let initialState = {
    news: null,
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }
        default:
            return state;
    }
}

export const setNewsData = (news) => ({ type: SET_NEWS, news });

export const getNewsHeader = () => (dispatch) => {
    return newsAPI.setNews()
        .then(res => {
            dispatch(setNewsData(res));
        });
}
export const getNewsCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await newsAPI.setNewsCreate(data).then(res => {
        dispatch(getNewsHeader());
    });
}
export const getNewsUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.fileUrl = path;

    return await newsAPI.setNewsUpdate(data).then(res => {
        dispatch(getNewsHeader());
    });
}