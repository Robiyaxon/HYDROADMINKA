import { instance } from './api'

export const economicAPI = {
    // header
    setEconomicHeader() {
        return instance.get(`economyHeadersAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateEconomicHeader(data) {
        const { id, title_uz, photoUrl, originalPath } = data;
        return instance.put(`economyHeadersAPI/1`, { id, title_uz, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },


    setEconomic() {
        return instance.get(`economyAgreementsAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateEconomic(data) {
        const { id, title_uz, title_ru, title_en, title_krl, photoUrl, originalPath } = data;
        return instance.put(`economyAgreementsAPI/${id}`, { id, title_uz, title_ru, title_en, title_krl, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },
    setEconomicCreate(data) {
        const { title_uz, title_ru, title_en, title_krl, photoUrl } = data;
        return instance.post(`economyAgreementsAPI`, { title_uz, title_ru, title_en, title_krl, photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setEconomicDeleteImage(id) {
        return instance.delete(`economyAgreementsAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },

    // chart

    setChart() {
        return instance.get(`economyChartsAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateChart(data) {
        const { id, amount } = data;
        return instance.put(`economyChartsAPI/${id}`, { id, amount })
            .then(async (response) => {
                return await response.data;
            });
    },
    setChartCreate(data) {
        const { amount } = data
        return instance.post(`economyChartsAPI`, { amount })
            .then(async (response) => {
                return await response.data;
            });
    },
    setChartDelete(id) {
        return instance.delete(`economyChartsAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },

    // OpenSourses
    setOpenSourses() {
        return instance.get(`economyOpenSoursesAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateOpenSourses(data) {
        const { id, title_uz, title_ru, title_en, title_krl, description_uz, description_ru, description_en, description_krl, originalPath  } = data;
        return instance.put(`economyOpenSoursesAPI/${id}`, { id, title_uz, title_ru, title_en, title_krl, description_uz, description_ru, description_en, description_krl, originalPath  })
            .then(async (response) => {
                return await response.data;
            });
    },
    setOpenSoursesCreate(data) {
        const { title_uz, title_ru, title_en, title_krl, photoUrl, description_uz, description_ru, description_en, description_krl } = data;
        return instance.post(`economyOpenSoursesAPI`, { title_uz, title_ru, title_en, title_krl, photoUrl, description_uz, description_ru, description_en, description_krl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setOpenSoursesDeleteImage(id) {
        return instance.delete(`economyOpenSoursesAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },
}