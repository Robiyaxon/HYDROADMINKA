import { instance } from "./api";

export const contactAPI = {

    setContactHeader() {
        return instance.get(`contactHeadersAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },

    upDateContactHeader(data) {
        const { id, title_uz, title_ru, title_en, photoUrl } = data
        return instance.put(`contactHeadersAPI/${id}`, { id, title_uz, title_ru, title_en, photoUrl })
            .then(async (res) => {
                return await res.data;
            });
    },

}