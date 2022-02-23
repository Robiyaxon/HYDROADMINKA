import { globalAPI } from "../api/api";
import { newsAPI } from "./../api/newsApi";

const SET_NEWS = "/news/SET_NEWS";
const SET_MAIN_NEWS = "/news/SET_MAIN_NEWS";

// categories

const SET_CATEGORIES = "/news/SET_CATEGORIES";
const SET_CATEGORIES_DELETE = "/news/SET_CATEGORIES_DELETE";

let initialState = {
  news: null,
  categories: null,
  mainNews: null
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.news,
      };
    case SET_MAIN_NEWS:
      return {
        ...state,
        mainNews: action.mainNews,
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

// action creator

export const setNewsData = (news) => ({ type: SET_NEWS, news });

export const setCategoriesData = (categories) => ({ type: SET_CATEGORIES, categories });
export const setCategoriesDeleteAC = (id) => ({ type: SET_CATEGORIES_DELETE, id });

export const setMainNewsData = (mainNews) => ({
  type: SET_MAIN_NEWS,
  mainNews,
});

//thunk

// header

export const getNewsHeader = () => (dispatch) => {
  return newsAPI.setNews().then((res) => {
    dispatch(setNewsData(res));
  });
};
export const getNewsCreate = (data) => async (dispatch) => {
  let image = await globalAPI.uploadImage(data.selectedImage).then((res) => {
    return res;
  });

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await newsAPI.setNewsCreate(data).then((res) => {
    dispatch(getNewsHeader());
  });
};
export const getNewsUpdate = (data) => async (dispatch) => {
  let image =
    data.selectedI &&
    (await globalAPI.uploadImage(data.selectedImage).then((res) => {
      return res;
    }));

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.fileUrl = path;

  return await newsAPI.setNewsUpdate(data).then((res) => {
    dispatch(getNewsHeader());
  });
};

// main

export const getMainNews = () => (dispatch) => {
  return newsAPI.setMainNews().then((res) => {
    dispatch(setMainNewsData(res));
  });
};
export const getMainNewsCreator = (data) => async (dispatch) => {
  let image = await globalAPI.uploadImage(data.selectedImage).then((res) => {
    return res;
  });

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await newsAPI.setMainNewsCreate(data).then((res) => {
    dispatch(getNewsHeader());
  });
};
export const getMainNewsUpdate = (data) => async (dispatch) => {
  let image =
    data.selectedI &&
    (await globalAPI.uploadImage(data.selectedImage).then((res) => {
      return res;
    }));

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.fileUrl = path;

  return await newsAPI.setMainNewsUpdate(data).then((res) => {
    dispatch(getNewsHeader());
  });
};

// categories

export const getCategories = () => (dispatch) => {
  return newsAPI.setCategories().then((response) => {
    dispatch(setCategoriesData(response));
  });
};
export const getCategoriesCreate = (data) => async (dispatch) => {

  return await newsAPI.setCategoriesCreate(data).then((response) => {
    dispatch(getCategories());
  });
};
export const getCategoriesUpdate = (data) => async (dispatch) => {
  
  return await newsAPI.setCategoriesUpdate(data).then((response) => {
    dispatch(getCategories());
  });
};
export const getCategoriesDelete = (id) => (dispatch) => {
  return newsAPI.setCategoriesDelete(id).then((response) => {
    dispatch(getCategories());
    dispatch(setCategoriesDeleteAC(id));
  });
};
