import { globalAPI, homeApi } from "../api/api";

const SET_HOME_CAROUSEL_IMAGES = 'SET_HOME_CAROUSEL_IMAGES';
const SET_HOME_CAROUSEL_IMAGE_DELETE = 'SET_HOME_CAROUSEL_IMAGE_DELETE';

//

const SET_HOME_PANEL_DATA = 'SET_HOME_PANEL_DATA';
const SET_HOME_PANEL_DATA_DELETE = 'SET_HOME_PANEL_DATA_DELETE';

//

const SET_HOME_ABOUT_IMAGES = 'SET_HOME_ABOUT_IMAGES';
const SET_HOME_ABOUT_IMAGE_DELETE = 'SET_HOME_ABOUT_IMAGE_DELETE';

//

const SET_HOME_OUR_WORK_IMAGES = 'SET_HOME_OUR_WORK_IMAGES';
const SET_HOME_OUR_WORK_IMAGE_DELETE = 'SET_HOME_OUR_WORK_IMAGE_DELETE';

//

const SET_HOME_PROJECT_NUMBERS_IMAGES = 'SET_HOME_PROJECT_NUMBERS_IMAGES';
const SET_HOME_PROJECT_NUMBERS_IMAGE_DELETE = 'SET_HOME_PROJECT_NUMBERS_IMAGE_DELETE';

//

const SET_HOME_REGION_IMAGES = 'SET_HOME_REGION_IMAGES';
const SET_HOME_REGION_IMAGE_DELETE = 'SET_HOME_REGION_IMAGE_DELETE';

let initialState = {
    images: null,
    homePanel2: null,
    about: null,
    ourWork: null,
    projectNumbers: null,
    region: null
};


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_CAROUSEL_IMAGES:
            return {
                ...state,
                images: action.images
            }
        case SET_HOME_CAROUSEL_IMAGE_DELETE:
            let images = [ ...state.images ];
            images = images.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                images
            }
        
        //

        case SET_HOME_PANEL_DATA: 
            return {
                ...state,
                homePanel2: action.homePanel2
            }
        case SET_HOME_PANEL_DATA_DELETE:
            let homePanel2 = [ ...state.homePanel2 ];
            homePanel2 = homePanel2.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                homePanel2
            }

        //

        case SET_HOME_ABOUT_IMAGES:
            return {
                ...state,
                about: action.images
            }
        case SET_HOME_ABOUT_IMAGE_DELETE:
            let about = [ ...state.about ];
            about = about.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                about
            }

        //

        case SET_HOME_OUR_WORK_IMAGES:
            return {
                ...state,
                ourWork: action.images
            }
        case SET_HOME_OUR_WORK_IMAGE_DELETE:
            let ourWork = [ ...state.ourWork ];
            ourWork = ourWork.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                ourWork
            }

        //

        case SET_HOME_PROJECT_NUMBERS_IMAGES:
            return {
                ...state,
                projectNumbers: action.images
            }
        case SET_HOME_PROJECT_NUMBERS_IMAGE_DELETE:
            let projectNumbers = [ ...state.projectNumbers ];
            projectNumbers = projectNumbers.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                projectNumbers
            }

        //

        case SET_HOME_REGION_IMAGES:
            return {
                ...state,
                region: action.images
            }
        case SET_HOME_REGION_IMAGE_DELETE:
            let region = [ ...state.region ];
            region = region.filter(el => {
                if(el.id !== action.id) {
                    return el;
                }
            })
            return {
                ...state,
                region
            }
        default:
            return state;
    }
}
export const setHomePanel2Data = (homePanel2) => ({type: SET_HOME_PANEL_DATA, homePanel2 });
export const setHomePanel2DeleteData = (id) => ({type: SET_HOME_PANEL_DATA_DELETE, id });

//

export const setHomeCarouselImagesData = (images) => ({type: SET_HOME_CAROUSEL_IMAGES, images });
export const setHomeCarouselImageDeleteData = (id) => ({type: SET_HOME_CAROUSEL_IMAGE_DELETE, id });

export const setHomeAboutImagesData = (images) => ({type: SET_HOME_ABOUT_IMAGES, images });
export const setHomeAboutImageDeleteData = (id) => ({type: SET_HOME_ABOUT_IMAGE_DELETE, id });

export const setHomeOurWorkImagesData = (images) => ({type: SET_HOME_OUR_WORK_IMAGES, images });
export const setHomeOurWorkImageDeleteData = (id) => ({type: SET_HOME_OUR_WORK_IMAGE_DELETE, id });

export const setHomeProjectNumbersImagesData = (images) => ({type: SET_HOME_PROJECT_NUMBERS_IMAGES, images });
export const setHomeProjectNumbersImageDeleteData = (id) => ({type: SET_HOME_PROJECT_NUMBERS_IMAGE_DELETE, id });

export const setHomeRegionImagesData = (images) => ({type: SET_HOME_REGION_IMAGES, images });
export const setHomeRegionImageDeleteData = (id) => ({type: SET_HOME_REGION_IMAGE_DELETE, id });

export const getCarouselImages = () => (dispatch) => {
    return homeApi.setCarousel()
        .then(response => {
            dispatch(setHomeCarouselImagesData(response));
    });
}
export const getCarouselImageCreate = (data) => async(dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setCreateImage(data).then(response => {
        dispatch(getCarouselImages());
    });
}
export const getCarouselImageUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateImage(data).then(response => {
        dispatch(getCarouselImages());
    });
}
export const getCarouselImageDelete = (id) => (dispatch) => {
    return homeApi.setDeleteImage(id)
        .then(response => {
            dispatch(setHomeCarouselImageDeleteData(id));
    });
}

//

export const getHomePanel2Data = () => (dispatch) => {
    return homeApi.setHomePanel2()
        .then(response => {
            dispatch(setHomePanel2Data(response));
    });
}
export const getHomePanel2Create = (data) => async(dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setCreateHomePanel2(data).then(response => {
        dispatch(getHomePanel2Data());
    });
}
export const getHomePanel2Update = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateHomePanel2(data).then(response => {
        dispatch(getHomePanel2Data());
    });
}
export const getHomePanel2Delete = (id) => (dispatch) => {
    return homeApi.setDeleteHomePanel2(id)
        .then(response => {
            dispatch(setHomePanel2DeleteData(id));
    });
}

//

export const getAboutImages = () => (dispatch) => {
    return homeApi.setAbout()
        .then(response => {
            dispatch(setHomeAboutImagesData(response));
    });
}
export const getAboutImageCreate = (data) => async(dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setCreateAbout(data).then(response => {
        dispatch(getAboutImages());
    });
}
export const getAboutImageUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateAbout(data).then(response => {
        dispatch(getAboutImages());
    });
}
export const getAboutImageDelete = (id) => (dispatch) => {
    return homeApi.setDeleteAbout(id)
        .then(response => {
            dispatch(setHomeAboutImageDeleteData(id));
    });
}

//

export const getOurWorkImages = () => (dispatch) => {
    return homeApi.setOurWork()
        .then(response => {
            dispatch(setHomeOurWorkImagesData(response));
    });
}
export const getOurWorkImageCreate = (data) => async(dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setCreateOurWork(data).then(response => {
        dispatch(getOurWorkImages());
    });
}
export const getOurWorkImageUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateOurWork(data).then(response => {
        dispatch(getOurWorkImages());
    });
}
export const getOurWorkImageDelete = (id) => (dispatch) => {
    return homeApi.setDeleteOurWork(id)
        .then(response => {
            dispatch(setHomeOurWorkImageDeleteData(id));
    });
}

//

export const getProjectNumbersImages = () => (dispatch) => {
    return homeApi.setProjectNumbers()
        .then(response => {
            dispatch(setHomeProjectNumbersImagesData(response));
    });
}
export const getProjectNumbersImageCreate = (data) => async(dispatch) => {
    let image = await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setCreateProjectNumbers(data).then(response => {
        dispatch(getProjectNumbersImages());
    });
}
export const getProjectNumbersImageUpdate = (data) => async(dispatch) => {
    let image = data.selectedI && await globalAPI.uploadImage(data.selectedImage)
        .then(response => {
            return response;
    });
    
    let path = image.dbPath && 'http://softcity.uz:9999' + image.dbPath;
    data.photoUrl = path;
    
    return await homeApi.setUpdateProjectNumbers(data).then(response => {
        dispatch(getProjectNumbersImages());
    });
}
export const getProjectNumbersImageDelete = (id) => (dispatch) => {
    return homeApi.setDeleteProjectNumbers(id)
        .then(response => {
            dispatch(setHomeProjectNumbersImageDeleteData(id));
    });
}

//

export const getRegionImages = () => (dispatch) => {
    return homeApi.setHomePanel8Region()
        .then(response => {
            dispatch(setHomeRegionImagesData(response));
    });
}
export const getRegionImageCreate = (data) => async(dispatch) => {    
    return await homeApi.setCreateHomePanel8Region(data).then(response => {
        dispatch(getRegionImages());
    });
}
export const getRegionImageUpdate = (data) => async(dispatch) => {    
    return await homeApi.setUpdateHomePanel8Region(data).then(response => {
        dispatch(getRegionImages());
    });
}
export const getRegionImageDelete = (id) => (dispatch) => {
    return homeApi.setDeleteHomePanel8Region(id)
        .then(response => {
            dispatch(setHomeRegionImageDeleteData(id));
    });
}

export default homeReducer;