import { instance } from './api'

export const corporativeAPI = {
    setHeader() {
        return instance.get(`corporativeHeadersAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setHeaderCreate(data) {
        const { title_uz,  title_ru, title_en, title_krl,  photoUrl } = data;
        return instance.post(`corporativeHeadersAPI`, { title_uz, title_ru, title_en, title_krl, photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setHeaderUpdate(data) {
        const { id, title_uz, title_ru, title_en, title_krl, photoUrl, originalPath } = data;
        return instance.put(`corporativeHeadersAPI/${id}`, { id, title_uz,  title_ru, title_en, title_krl, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },

    // main partners
    setMainPartners() {
        return instance.get(`mainPartnersAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setMainPartnersCreate(data) {
        const { name, description_uz, description_ru, description_en, description_krl, photoUrl, urlLink } = data;
        return instance.post(`mainPartnersAPI`, { name, description_uz, description_ru, description_en, description_krl, photoUrl, urlLink })
            .then(async (response) => {
                return await response.data;
            });
    },
    setMainPartnersUpdate(data) {
        const { id, name, description_uz, description_ru, description_en, description_krl,  photoUrl, urlLink, originalPath } = data;
        return instance.put(`mainPartnersAPI/${id}`, { id, name, description_uz, description_ru, description_en, description_krl, urlLink, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },
    setMainPartnersDelete(id) {
        return instance.delete(`mainPartnersAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },
}