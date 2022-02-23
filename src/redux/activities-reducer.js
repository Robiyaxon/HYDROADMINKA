import { globalAPI } from "../api/api";
import { contactAPI } from "./../api/contactApi";
import { activitiesAPI } from "./../api/activitiesApi";

const SET_ACTIVITIES = "/activities/SET_ACTIVITIES";

const SET_CATEGORIES = "/activities/SET_CATEGORIES";
const SET_CATEGORIES_DELETE = "/activities/SET_CATEGORIES_DELETE";

let initialState = {
  header: null,
  categories: null
};

export const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        header: action.header,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_CATEGORIES_DELETE:
      let categories = [...state.categories];
      categories = categories.filter((el) => {
        if (el.id !== action.id) {
          return el;
        }
      });
      return {
        ...state,
        categories,
      };
    default:
      return state;
  }
};

export const setActivitiesData = (header) => ({ type: SET_ACTIVITIES, header });


export const setActivitiesCategoriesData = (categories) => ({ type: SET_CATEGORIES, categories });
export const setActivitiesCategoriesDeleteAC = (id) => ({ type: SET_CATEGORIES_DELETE, id });

export const getActivities = () => (dispatch) => {
  return activitiesAPI.setactivities().then((res) => {
    dispatch(setActivitiesData(res));
  });
};
export const getActivitiesCreate = (data) => async (dispatch) => {
  let image = await globalAPI.uploadImage(data.selectedImage).then((res) => {
    return res;
  });

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await activitiesAPI.setActivitiesCreate(data).then((res) => {
    dispatch(setActivitiesData());
  });
};
export const getActivitiesUpdate = (data) => async (dispatch) => {
  let image =
    data.selectedI &&
    (await globalAPI
      .uploadImage(data.activityData.selectedImage)
      .then((res) => {
        return res;
      }));

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.activityData.photoUrl = path;

  return await activitiesAPI
    .setActivitiesUpdate(data.activityData)
    .then((res) => {
      dispatch(getActivities());
    });
};

// categories

export const getActivitiesCategories = () => (dispatch) => {
    return activitiesAPI.setCategories().then((response) => {
      dispatch(setActivitiesCategoriesData(response));
    });
  };
  export const getActivitiesCategoriesCreate = (data) => async (dispatch) => {
  
    return await activitiesAPI.setCategoriesCreate(data).then((response) => {
      dispatch(getActivitiesCategories());
    });
  };
  export const getActivitiesCategoriesUpdate = (data) => async (dispatch) => {
    
    return await activitiesAPI.setCategoriesUpdate(data).then((response) => {
      dispatch(getActivitiesCategories());
    });
  };
  export const getActivitiesCategoriesDelete = (id) => (dispatch) => {
    return activitiesAPI.setCategoriesDelete(id).then((response) => {
      dispatch(getActivitiesCategories());
      dispatch(setActivitiesCategoriesDeleteAC(id));
    });
  };
  