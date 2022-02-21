import { instance } from './api'

export const newsAPI = {
    setNews() {
        return instance.get(`newsHeadersAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setNewsCreate(data) {
        const { title_uz, title_ru, title_en, title_krl, photoUrl } = data;
        return instance.post(`newsHeadersAPI`, { title_uz, title_ru, title_en, title_krl, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setNewsUpdate(data) {
        const { id, title_uz, title_ru, title_en, title_krl, fileUrl, originalPath } = data;
        return instance.put(`newsHeadersAPI/${id}`, { id, title_uz, title_ru, title_en, title_krl, fileUrl: fileUrl ? fileUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    }
}