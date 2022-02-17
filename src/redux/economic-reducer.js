import { globalAPI } from "../api/api";
import { economicAPI } from './../api/economicApi';
// header

const SET_ECONOMIC_HEADER = '/economic/SET_ECONOMIC_HEADER';


const SET_ECONOMIC_IMAGES = '/economic/SET_ECONOMIC_IMAGES';
const SET_ECONOMIC_IMAGE_DELETE = '/economic/SET_ECONOMIC_IMAGE_DELETE';

// chart

const SET_CHART = '/economic/SET_CHART';
const SET_CHART_DELETE = '/economic/SET_CHART_DELETE';

// openSourses
const SET_OPEN_SOURSES_IMAGES = '/economic/SET_OPEN_SOURSES_IMAGES';
const SET_OPEN_SOURSES_IMAGE_DELETE = '/economic/SET_OPEN_SOURSES_IMAGE_DELETE';

let initialState = {
    images: null,
    amount: null,
    header: null,
    openSourses: null
};


export const economicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ECONOMIC_IMAGES:
            return {
                ...state,
                images: action.images
            }
        case SET_ECONOMIC_IMAGE_DELETE:
            let images = [...state.images];
            images = images.filter(el => {
                if (el.id !== action.id) {
                    return el;
                }
            })

        // chart

        case SET_CHART:
            return {
                ...state,
                amount: action.amount
            }
        case SET_CHART_DELETE:
            let amount = [...state.amount];
            amount = amount.filter(el => {
                if (el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                amount
            }
        case SET_ECONOMIC_HEADER:
            return {
                ...state,
                header: action.header
            }

        // open sourses

        case SET_OPEN_SOURSES_IMAGES:
            return {
                ...state,
                openSourses: action.openSourses
            }
        case SET_OPEN_SOURSES_IMAGE_DELETE:
            let openSourses = [...state.openSourses];
            openSourses = openSourses.filter(el => {
                if (el.id !== action.id) {
                    return el;
                }
            })

        default:
            return state;
    }
}


// action creators

export const setEconomicHeaderData = (header) => ({ type: SET_ECONOMIC_HEADER, header });

// agreement
export const setEconomicImagesData = (images) => ({ type: SET_ECONOMIC_IMAGES, images });
export const setEconomicDeleteData = (id) => ({ type: SET_ECONOMIC_IMAGE_DELETE, id });

// chart

export const setChartData = (amount) => ({ type: SET_CHART, amount });
export const setChartDeleteData = (id) => ({ type: SET_CHART_DELETE, id });

// OpenSourses
export const setOpenSoursesImagesData = (openSourses) => ({ type: SET_OPEN_SOURSES_IMAGES, openSourses });
export const setOpenSoursesDeleteData = (id) => ({ type: SET_OPEN_SOURSES_IMAGE_DELETE, id });


// thunk


// header

export const getEconomicHeader = () => (dispatch) => {
    return economicAPI.setEconomicHeader()
        .then(res => {
            dispatch(setEconomicHeaderData(res));
        });
}
export const getEconomicHeaderImageCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setEconomicHeader(data).then(res => {
        dispatch(getEconomicHeader());
    });
}
export const getEconomicHeaderImageUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setUpdateEconomicHeader(data).then(res => {
        dispatch(getEconomicHeader());
    });
}

// agreement

export const getEconomicImages = () => (dispatch) => {
    return economicAPI.setEconomic()
        .then(res => {
            dispatch(setEconomicImagesData(res));
        });
}


export const geEconomicImageCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setEconomicCreate(data).then(res => {
        dispatch(getEconomicImages());
    });
}

export const getEconomicUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setUpdateEconomic(data).then(res => {
        dispatch(getEconomicImages());
    });
}

export const getEconomicDelete = (id) => (dispatch) => {
    return economicAPI.setEconomicDeleteImage(id)
        .then(res => {
            dispatch(getEconomicImages());
            dispatch(setEconomicDeleteData(id));

        });
}

// chart

export const getChart = () => (dispatch) => {
    return economicAPI.setChart()
        .then(res => {
            dispatch(setChartData(res));
        });
}

export const getChartCreate = (data) => async (dispatch) => {
    return await economicAPI.setChartCreate(data).then(res => {
        dispatch(getChart());
    });
}

export const getChartUpdate = (data) => async (dispatch) => {
    return await economicAPI.setUpdateChart(data).then(res => {
        dispatch(getChart());
    });
}

export const getChartDelete = (id) => (dispatch) => {
    return economicAPI.setChartDelete(id)
        .then(res => {
            dispatch(getChart());
            dispatch(setChartDeleteData(id));
        });
}

// open Sourses

export const getEconomicOpenSourses = () => (dispatch) => {
    return economicAPI.setOpenSourses()
        .then(res => {
            dispatch(setOpenSoursesImagesData(res));
        });
}

export const getOpenSoursesImageCreate = (data) => async (dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setOpenSoursesCreate(data).then(res => {
        dispatch(getEconomicOpenSourses());
    });
}

export const getOpenSoursesUpdate = (data) => async (dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(res => {
            return res;
        });

    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;

    return await economicAPI.setUpdateOpenSourses(data).then(res => {
        dispatch(getEconomicOpenSourses());
    });
}

export const getOpenSoursesDelete = (id) => (dispatch) => {
    return economicAPI.setOpenSoursesDeleteImage(id)
        .then(res => {
            dispatch(getEconomicOpenSourses());
            dispatch(setEconomicDeleteData(id));

        });
}