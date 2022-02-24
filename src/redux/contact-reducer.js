import { globalAPI } from "../api/api";
import { contactAPI } from "./../api/contactApi";

const SET_CONTACT_IMAGES = "/contact/SET_CONTACT_IMAGES";

const SET_COMMENTS = "/contact/SET_COMMENTS";
const SET_COMMENTS_DELETE = "/contact/SET_COMMENTS_DELETE";

let initialState = {
  images: null,
  comments: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_IMAGES:
      return {
        ...state,
        images: action.images,
      };

    // comments

    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case SET_COMMENTS_DELETE:
      let comments = [...state.comments];
      comments = comments.filter((el) => {
        if (el.id !== action.id) {
          return el;
        }
      });
    default:
      return state;
  }
};

export const setContactImagesData = (images) => ({
  type: SET_CONTACT_IMAGES,
  images,
});

export const setCommentsData = (comments) => ({ type: SET_COMMENTS, comments });
export const setCommentsDeleteAC = (id) => ({ type: SET_COMMENTS_DELETE, id });

export const getContactImages = () => (dispatch) => {
  return contactAPI.setContact().then((res) => {
    dispatch(setContactImagesData(res));
  });
};
export const getContactImageCreate = (data) => async (dispatch) => {
  let image = await globalAPI.uploadImage(data.selectedImage).then((res) => {
    return res;
  });

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await contactAPI.setCreateContact(data).then((res) => {
    dispatch(getContactImages());
  });
};
export const getContactImageUpdate = (data) => async (dispatch) => {
  let image =
    data.selectedI &&
    (await globalAPI.uploadImage(data.selectedImage).then((res) => {
      return res;
    }));

  let path = image.dbPath && "http://softcity.uz:9999" + image.dbPath;
  data.photoUrl = path;

  return await contactAPI.setUpdateContact(data).then((res) => {
    dispatch(getContactImages());
  });
};

// comments

export const getComments = () => (dispatch) => {
  return contactAPI.setComments().then((res) => {
    dispatch(setCommentsData(res));
  });
};


export const getCommentsDelete = (id) => (dispatch) => {
    return contactAPI.setCommentsDelete(id).then((res) => {
      dispatch(getComments());
      dispatch(setCommentsDeleteAC(id));
    });
  };
  