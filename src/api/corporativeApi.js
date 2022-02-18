import { instance } from './api'

export const corporativeAPI = {
    setHeader() {
        return instance.get(`corporativeHeadersAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setHeaderCreate(data) {
        const { title_uz, photoUrl } = data;
        return instance.post(`corporativeHeadersAPI`, { title_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setHeaderUpdate(data) {
        const { id, title_uz, photoUrl, originalPath } = data;
        return instance.put(`corporativeHeadersAPI/${id}`, { id, title_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },

    // main partners
    setMainPartners() {
        return instance.get(`mainPartnersAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setMainPartnersCreate(data) {
        const { name, description_uz, photoUrl, urlLink } = data;
        return instance.post(`mainPartnersAPI`, { name, description_uz, photoUrl, urlLink })
        .then(async(response) => {
            return await response.data;
        });
    },
    setMainPartnersUpdate(data) {
        const { id, name, description_uz, photoUrl, urlLink, originalPath } = data;
        return instance.put(`mainPartnersAPI/${id}`, { id, name, description_uz, urlLink, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setMainPartnersDelete(id) {
        return instance.delete(`mainPartnersAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },
}