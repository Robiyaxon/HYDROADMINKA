import { instance } from "./api";

export const newsAPI = {
  // header
  setNews() {
    return instance.get(`newsHeadersAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setNewsCreate(data) {
    const { title_uz, title_ru, title_en, title_krl, photoUrl } = data;
    return instance
      .post(`newsHeadersAPI`, {
        title_uz,
        title_ru,
        title_en,
        title_krl,
        photoUrl,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setNewsUpdate(data) {
    const {
      id,
      title_uz,
      title_ru,
      title_en,
      title_krl,
      fileUrl,
      originalPath,
    } = data;
    return instance
      .put(`newsHeadersAPI/${id}`, {
        id,
        title_uz,
        title_ru,
        title_en,
        title_krl,
        fileUrl: fileUrl ? fileUrl : originalPath,
      })
      .then(async (response) => {
        return await response.data;
      });
  },

  // MainNews
  setMainNews() {
    return instance.get(`mainNewsAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setMainNewsCreate(data) {
    debugger
    const {
      title_uz,
      title_krl,
      title_ru,
      title_en,
      description_uz,
      description_krl,
      description_ru,
      description_en,
      photoUrl,
      newsCategoryID = 1,
    } = data;
    return instance
      .post(`mainNewsAPI`, {
        title_uz,
        title_krl,
        title_ru,
        title_en,
        description_uz,
        description_krl,
        description_ru,
        description_en,
        photoUrl,
        newsCategoryID
      
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setMainNewsUpdate(data) {
    const {
      id,
      title_uz,
      title_krl,
      title_ru,
      title_en,
      description_uz,
      description_krl,
      description_ru,
      description_en,
      photoUrl,
      newsCategoryID,
      name_uz,
      name_krl,
      name_ru,
      name_en,

      originalPath,
    } = data;
    return instance
      .put(`mainNewsAPI/${id}`, {
        id,
        title_uz,
        title_krl,
        title_ru,
        title_en,
        description_uz,
        description_krl,
        description_ru,
        description_en,
        photoUrl: photoUrl ? photoUrl : originalPath,
        newsCategoryID,
        newsCategory: { name_uz, name_krl, name_ru, name_en },
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setMainNewsDelete(id) {
    return instance.delete(`aboutPanel6API/${id}`).then(async (response) => {
      return await response.data;
    });
  },

  // Categories
  setCategories() {
    return instance.get(`mainNewsAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setCategoriesCreate(data) {
    debugger
    const {
      title_uz,
      title_krl,
      title_ru,
      title_en,
      description_uz,
      description_krl,
      description_ru,
      description_en,
      photoUrl,
      newsCategoryID = 1,
    } = data;
    return instance
      .post(`mainNewsAPI`, {
        title_uz,
        title_krl,
        title_ru,
        title_en,
        description_uz,
        description_krl,
        description_ru,
        description_en,
        photoUrl,
        newsCategoryID
      
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setCategoriesUpdate(data) {
    const {
      id,
      title_uz,
      title_krl,
      title_ru,
      title_en,
      description_uz,
      description_krl,
      description_ru,
      description_en,
      photoUrl,
      newsCategoryID,
      name_uz,
      name_krl,
      name_ru,
      name_en,

      originalPath,
    } = data;
    return instance
      .put(`mainNewsAPI/${id}`, {
        id,
        title_uz,
        title_krl,
        title_ru,
        title_en,
        description_uz,
        description_krl,
        description_ru,
        description_en,
        photoUrl: photoUrl ? photoUrl : originalPath,
        newsCategoryID,
        newsCategory: { name_uz, name_krl, name_ru, name_en },
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setCategoriesDelete(id) {
    return instance.delete(`aboutPanel6API/${id}`).then(async (response) => {
      return await response.data;
    });
  },
};
