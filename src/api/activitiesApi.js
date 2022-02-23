import { instance } from "./api";

export const activitiesAPI = {
  setactivities() {
    return instance.get(`activityHeadersAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setActivitiesCreate(data) {
    const { title_uz, photoUrl } = data;
    return instance
      .post(`activityHeadersAPI`, { title_uz, photoUrl })
      .then(async (response) => {
        return await response.data;
      });
  },
  setActivitiesUpdate(data) {
    console.log(data);
    const {
      id,
      title_uz,
      title_ru,
      title_en,
      title_krl,
      photoUrl,
      originalPath,
    } = data;
    let activityCategoryID = 8;
    return instance
      .put(`activityHeadersAPI/${id}`, {
        id,
        title_uz,
        title_ru,
        title_en,
        title_krl,
        activityCategory: { name_uz: data.activityData.name_uz },
        photoUrl: photoUrl ? photoUrl : originalPath,
        activityCategoryID,
      })
      .then(async (response) => {
        return await response.data;
      });
  },

   // categories

   setCategories() {
    return instance.get(`activityCategoriesAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setCategoriesCreate(data) {
    const { name_uz, name_krl, name_ru, name_en } = data;
    return instance
      .post(`activityCategoriesAPI`, {
        name_uz,
        name_krl,
        name_ru,
        name_en
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setCategoriesUpdate(data) {
    const { name_uz, name_krl, name_ru, name_en, id } = data;
    return instance
      .put(`activityCategoriesAPI/${id}`, {
        id,
        name_uz,
        name_krl,
        name_ru,
        name_en,
        mainActivity: null,
        activityHeader: null,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setCategoriesDelete(id) {
    return instance.delete(`activityCategoriesAPI/${id}`).then(async (response) => {
      return await response.data;
    });
  },
};
