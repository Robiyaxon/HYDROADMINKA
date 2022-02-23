import { instance } from "./api";

export const technicalAPI = {
  // header
  setTechnical() {
    return instance.get(`technicalHeadersAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setTechnicalCreate(data) {
    const { title_uz, title_ru, title_en, title_krl, photoUrl } = data;
    return instance
      .post(`technicalHeadersAPI`, {
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
  setTechnicalUpdate(data) {
    const {
      id,
      title_uz,
      title_ru,
      title_en,
      title_krl,
      photoUrl,
      originalPath,
    } = data;
    return instance
      .put(`technicalHeadersAPI/${id}`, {
        id,
        title_uz,
        title_ru,
        title_en,
        title_krl,
        photoUrl: photoUrl ? photoUrl : originalPath,
      })
      .then(async (response) => {
        return await response.data;
      });
  },

  // Youtube videos url

  setTechnicalVideos() {
    return instance.get(`technicalVideoUrlsAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setTechnicalVideosCreate(data) {
    const { videoUrlYoutube } = data;
    return instance
      .post(`technicalVideoUrlsAPI`, { videoUrlYoutube })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalVideosUpdate(data) {
    const { id, videoUrlYoutube, originalPath } = data;
    return instance
      .put(`technicalVideoUrlsAPI/${id}`, {
        id,
        videoUrlYoutube: videoUrlYoutube ? videoUrlYoutube : originalPath,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalVideosDelete(id) {
    return instance
      .delete(`technicalVideoUrlsAPI/${id}`)
      .then(async (response) => {
        return await response.data;
      });
  },

  // TechnicalMachineCategories

  setTechnicalMachine() {
    return instance
      .get(`technicalMachineCategoriesAPI`)
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalMachineCreate(data) {
    const { name_uz, name_krl, name_ru, name_en } = data;
    return instance
      .post(`technicalMachineCategoriesAPI`, {
        name_uz,
        name_krl,
        name_ru,
        name_en,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalMachineUpdate(data) {
    const { id, name_uz, name_krl, name_ru, name_en } = data;
    return instance
      .put(`technicalMachineCategoriesAPI/${id}`, {
        id,
        name_uz,
        name_krl,
        name_ru,
        name_en,
        technicalMachine: null,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalMachineDelete(id) {
    return instance
      .delete(`technicalMachineCategoriesAPI/${id}`)
      .then(async (response) => {
        return await response.data;
      });
  },

  // Statistics

  setStatistics() {
    return instance
      .get(`technicalStatisticsCategoriesAPI`)
      .then(async (response) => {
        return await response.data;
      });
  },
  setStatisticsCreate(data) {
    const { name_uz, name_krl, name_ru, name_en } = data;
    return instance
      .post(`technicalStatisticsCategoriesAPI`, {
        name_uz,
        name_krl,
        name_ru,
        name_en,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setStatisticsUpdate(data) {
    const { id, name_uz, name_krl, name_ru, name_en } = data;
    return instance
      .put(`technicalStatisticsCategoriesAPI/${id}`, {
        id,
        name_uz,
        name_krl,
        name_ru,
        name_en,
        mainTechnicalStatistics: null,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setStatisticsDelete(id) {
    return instance
      .delete(`technicalStatisticsCategoriesAPI/${id}`)
      .then(async (response) => {
        return await response.data;
      });
  },

  // TechnicalMachine

  setTechnicalMachineAll() {
    return instance.get(`technicalMachinesAPI`).then(async (response) => {
      return await response.data;
    });
  },
  setTechnicalMachineAllCreate(data) {
    const {
      title_uz,
      title_ru,
      title_en,
      title_krl,
      photoUrl,
      description_uz,
      description_ru,
      description_en,
      description_krl,
      amount,
    } = data;
    return instance
      .post(`technicalMachinesAPI`, {
        title_uz,
        title_ru,
        title_en,
        title_krl,
        photoUrl,
        description_uz,
        description_ru,
        description_en,
        description_krl,
        amount,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalMachineAllUpdate(data) {
    const {
      id,
      title_uz,
      title_ru,
      title_en,
      title_krl,
      photoUrl,
      description_uz,
      description_ru,
      description_en,
      description_krl,
      amount,
      technicalMachineCatigoryID= id
    } = data;
    return instance
      .put(`technicalMachinesAPI/${id}`, {
        id,
        title_uz,
        title_ru,
        title_en,
        title_krl,
        photoUrl,
        description_uz,
        description_ru,
        description_en,
        description_krl,
        amount,
      })
      .then(async (response) => {
        return await response.data;
      });
  },
  setTechnicalMachineAllDelete(id) {
    return instance
      .delete(`technicalMachinesAPI/${id}`)
      .then(async (response) => {
        return await response.data;
      });
  },
};
