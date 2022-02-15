import * as axios from "axios";

export const instance = axios.create({
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
    setCreateImage(data) {
        debugger
        const { title_uz, description_uz, photoUrl } = data;
        return instance.post(`homePanel1CarouselAPI`, { title_uz, description_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateImage(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        return instance.put(`homePanel1CarouselAPI/${id}`, { id, title_uz, description_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteImage(id) {
        return instance.delete(`homePanel1CarouselAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    }
}