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
    },

    //home2

    setHomePanel2() {
        return instance.get(`homePanel2API`)
            .then(async(response) => {
        
                return await response.data;
            });
    },
    setCreateHomePanel2(data) {

        const { title_uz, description_uz, photoUrl } = data;
        return instance.post(`homePanel2API`, { title_uz, description_uz, iconLinkName: photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateHomePanel2(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        return instance.put(`homePanel2API/${id}`, { id, title_uz, description_uz, iconLinkName: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteHomePanel2(id) {
        return instance.delete(`homePanel2API/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },

    //home2

    //home3About

    setAbout() {
        return instance.get(`homePanel3AboutAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateAbout(data) {
        const { title_uz, description_uz, photoUrl } = data;
        return instance.post(`homePanel3AboutAPI`, { title_uz, description_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateAbout(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        return instance.put(`homePanel3AboutAPI/${id}`, { id, title_uz, description_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteAbout(id) {
        return instance.delete(`homePanel3AboutAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },

    //home3About

    //home4OurWork

    setOurWork() {
        return instance.get(`homePanel4OurWorkAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateOurWork(data) {
        const { title_uz, photoUrl } = data;
        return instance.post(`homePanel4OurWorkAPI`, { title_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateOurWork(data) {
        const { id, title_uz, photoUrl, originalPath } = data;
        return instance.put(`homePanel4OurWorkAPI/${id}`, { id, title_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteOurWork(id) {
        return instance.delete(`homePanel4OurWorkAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },

    //home4OurWork

    //home6ProjectNumbers

    setProjectNumbers() {
        return instance.get(`homePanel6ProjectNumbersAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateProjectNumbers(data) {
        const { title_uz, photoUrl } = data;
        return instance.post(`homePanel6ProjectNumbersAPI`, { title_uz, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateProjectNumbers(data) {
        const { id, title_uz, photoUrl, originalPath } = data;
        return instance.put(`homePanel6ProjectNumbersAPI/${id}`, { id, title_uz, photoUrl: photoUrl ? photoUrl :  originalPath })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteProjectNumbers(id) {
        return instance.delete(`homePanel6ProjectNumbersAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },

    //home6ProjectNumbers

    //home8Region

    setHomePanel8Region() {
        return instance.get(`homePanel8RegionAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateHomePanel8Region(data) {
        const { title_uz, description_uz } = data;
        return instance.post(`homePanel8RegionAPI`, { title_uz, description_uz })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateHomePanel8Region(data) {
        const { id, title_uz, description_uz } = data;
        return instance.put(`homePanel8RegionAPI/${id}`, { id, title_uz, description_uz })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteHomePanel8Region(id) {
        return instance.delete(`homePanel8RegionAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },

    //home8Region
}

export const aboutAPI = {
    setAboutCompanies() {
        return instance.get(`aboutCompaniesAPI`)
            .then(async(response) => {
                return await response.data;
            });
    },
    setCreateAboutCompanie(data) {
        const { title_uz, description_uz, phone, email, address, telegramLink, instagramLink, youtubeLink,
        faceBookLink, footerText, photoUrl } = data;
        return instance.post(`aboutCompaniesAPI`, { title_uz, description_uz,
        phone, email, address, telegramLink, instagramLink, youtubeLink,
        faceBookLink, footerText, photoUrl
        })
        .then(async(response) => {
            return await response.data;
        });
    },
    setUpdateAboutCompanie(data) {
        const { id, title_uz, description_uz, phone, email, address, telegramLink, instagramLink, youtubeLink,
            faceBookLink, footerText, photoUrl  } = data;
        return instance.put(`aboutCompaniesAPI/${id}`, { id, title_uz, description_uz, phone, email, address, telegramLink, instagramLink, youtubeLink,
            faceBookLink, footerText, photoUrl })
        .then(async(response) => {
            return await response.data;
        });
    },
    setDeleteAboutCompanie(id) {
        return instance.delete(`aboutCompaniesAPI/${id}`)
        .then(async(response) => {
            return await response.data;
        });
    },
}