import { instance } from './api'

export const contactAPI = {
    setContact() {
        return instance.get(`contactHeadersAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateContact(data) {
        const { title_uz, photoUrl } = data;
        return instance.post(`contactHeadersAPI`, { title_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateContact(data) {
        const { id, title_uz, title_ru, title_en, title_krl, photoUrl, originalPath } = data;
        return instance.put(`contactHeadersAPI/1`, { id, title_uz, title_ru, title_en, title_krl, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },

    // comments

    setComments() {
        return instance.get(`mainContactsAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCommentsDelete(id) {
        return instance.delete(`mainContactsAPI/${id}`).then(async (response) => {
          return await response.data;
        });
      },
}