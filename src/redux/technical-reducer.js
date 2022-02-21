import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';
import { technicalAPI } from './../api/technicalApi';

const SET_TECHNICAL_HEADER = '/technical/SET_TECHNICAL_HEADER';

const SET_TECHNICAL_VIDEOS = '/technical/SET_TECHNICAL_VIDEOS';
const SET_TECHNICAL_VIDEOS_DELETE = '/technical/SET_TECHNICAL_VIDEOS_DELETE';

let initialState = {
    header: null,
    videos: null
};


export const technicalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TECHNICAL_HEADER:
            return {
                ...state,
                header: action.header
            }

        // Youtube videos url

        case SET_TECHNICAL_VIDEOS:
            return {
                ...state,
                videos: action.videos
            }
        case SET_TECHNICAL_VIDEOS_DELETE:
            let videos = [...state.videos];
            videos = videos.filter(el => {
                if (el.id !== action.id) {
                    return el;
                }
            })
        default:
            return state;
    }
}

// acion creator


// header

export const setTechnicalHeaderData = (header) => ({ type: SET_TECHNICAL_HEADER, header });

// Youtube videos url

export const setTechnicalVideosData = (videos) => ({ type: SET_TECHNICAL_VIDEOS, videos });
export const setTechnicalVideosDelete = (id) => ({ type: SET_TECHNICAL_VIDEOS_DELETE, id });

// thunk


// header

export const getTechnicalHeader = () => (dispatch) => {
    return technicalAPI.setTechnical()
        .then(res => {
            dispatch(setTechnicalHeaderData(res));
        });
}
export const getTechnicalCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await technicalAPI.setTechnicalCreate(data).then(res => {
        dispatch(getTechnicalHeader());
    });
}
export const getTechnicalUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await technicalAPI.setTechnicalUpdate(data).then(res => {
        dispatch(getTechnicalHeader());
    });
}

// Youtube videos url

export const getTechnicalVideo = () => (dispatch) => {
    return technicalAPI.setTechnicalVideos()
        .then(res => {
            dispatch(setTechnicalVideosData(res));
        });
}
export const getTechnicalVideoCreate = (data) => async (dispatch) => {
    return await technicalAPI.setTechnicalVideosCreate(data).then(res => {
        dispatch(getTechnicalVideo());
    });
}
export const getTechnicalVideoUpdate = (data) => async (dispatch) => {
    return await technicalAPI.setTechnicalUpdate(data).then(res => {
        dispatch(getTechnicalVideo());
    });
}

export const getTechnicalVideoDelete = (id) => (dispatch) => {
    return technicalAPI.setTechnicalVideosDelete(id)
        .then(res => {
            dispatch(getTechnicalVideo());
            dispatch(setTechnicalVideosDelete(id));
        });
}