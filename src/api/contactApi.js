import { instance } from './api'

export const contactAPI = {
    setContactHeader() {
        return instance.get(`contactHeaders`)
            .then(async (response) => {
                return await response.data;
            });
    },
    upDateContactHeader(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        debugger
        return instance.put(`contactHeaders/${id}`, { id, title_uz, description_uz, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    }
}