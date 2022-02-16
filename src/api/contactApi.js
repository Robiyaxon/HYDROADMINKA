import { instance } from './api'

export const contactAPI = {
    setContact() {
        return instance.get(`contactHeaders`)
            .then(async (response) => {
                return await response.data;
            });
    },
    upDateContactHeader(title_uz) {
        debugger
        return instance.put(`contactHeadersAPI/1/`, { id : 1, title_uz })
            .then(async (response) => {
                return await response.data;
            });
    }
}