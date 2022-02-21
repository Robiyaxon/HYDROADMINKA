import { globalAPI } from "../api/api";
import { contactAPI } from './../api/contactApi';
import { activitiesAPI } from './../api/activitiesApi';

const SET_ACTIVITIES = '/activities/SET_ACTIVITIES';

let initialState = {
    header: null,
};


export const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVITIES:
            return {
                ...state,
                header: action.header
            }
        default:
            return state;
    }
}

export const setActivitiesData = (header) => ({ type: SET_ACTIVITIES, header });

export const getActivities = () => (dispatch) => {
    return activitiesAPI.setactivities()
        .then(res => {
            dispatch(setActivitiesData(res));
        });
}
export const getActivitiesCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await activitiesAPI.setActivitiesCreate(data).then(res => {
        dispatch(setActivitiesData());
    });
}
export const getActivitiesUpdate = (data) => async (dispatch) => {
    debugger
    let image = data.selectedI && await globalAPI.uploadImage(data.activityData.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.activityData.photoUrl = path;

    return await activitiesAPI.setActivitiesUpdate(data.activityData).then(res => {
        debugger
        dispatch(getActivities());
    });
}