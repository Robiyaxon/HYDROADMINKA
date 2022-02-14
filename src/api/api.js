import * as axios from "axios";

const instance = axios.create({
    responseType: "json",
    withCredentials: true,
    baseURL: 'http://softcity.uz:9999/api/',
    headers:     {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
    }
});

export const globalAPI = {
    uploadImage(data) {
        // debugger
        return instance.post(`UploadAPI`, data)
            .then(async(response) => {
                return await response.data;
            });
    },
}

export const usersAPI = {
    login(email, password) {
        return instance.post(`LoginAPI?Email=${email}&Password=${password}`)
            .then(async(response) => {
                return await response.data;
            });
    },
}

export const homeApi = {
    setCarousel() {
        return instance.get(`homePanel1CarouselAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setUpdateImage(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        debugger
        return instance.put(`homePanel1CarouselAPI/${id}`, { id, title_uz, description_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    }
}