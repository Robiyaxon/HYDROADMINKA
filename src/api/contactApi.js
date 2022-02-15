import { instance } from "./api";

export const contactAPI = {
    upDateContactHeader() {
        return instance.put(`contactHeadersAPI/`)
            .then(async(res) => {
                return await res.data;
            });
    },
}