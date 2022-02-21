import { instance } from './api'

export const technicalAPI = {
    // header
    setTechnical() {
        return instance.get(`technicalHeadersAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setTechnicalCreate(data) {
        const { title_uz, title_ru, title_en, title_krl, photoUrl } = data;
        return instance.post(`technicalHeadersAPI`, { title_uz, title_ru, title_en, title_krl, photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setTechnicalUpdate(data) {
        const { id, title_uz, title_ru, title_en, title_krl, photoUrl, originalPath } = data;
        return instance.put(`technicalHeadersAPI/${id}`, { id, title_uz, title_ru, title_en, title_krl, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },

    // Youtube videos url

    setTechnicalVideos() {
        return instance.get(`technicalVideoUrlsAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setTechnicalVideosCreate(data) {
        const { videoUrlYoutube } = data;
        return instance.post(`technicalVideoUrlsAPI`, { videoUrlYoutube })
            .then(async (response) => {
                return await response.data;
            });
    },
    setTechnicalVideosUpdate(data) {
        const { id, videoUrlYoutube, originalPath } = data;
        return instance.put(`technicalVideoUrlsAPI/${id}`, { id, videoUrlYoutube: videoUrlYoutube ? videoUrlYoutube : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },
    setTechnicalVideosDelete(id) {
        return instance.delete(`technicalVideoUrlsAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },
}