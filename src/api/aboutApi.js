import { instance } from './api'

export const aboutAPI = {
    // header
    setAboutHeader() {
        return instance.get(`aboutPanel3API`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setCreateAboutHeader(data) {
        const { title_uz, photoUrl } = data;
        return instance.post(`aboutPanel3API`, { title_uz, photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateAboutHeader(data) {
        const { id, title_uz, photoUrl, originalPath } = data;
        return instance.put(`aboutPanel3API/1`, { id, title_uz, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },

    // organization history

    setAboutOrganizationHistory() {
        return instance.get(`aboutPhotoesAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setCreateOrganizationHistory(data) {
        const { photoUrl } = data;
        return instance.post(`aboutPhotoesAPI`, { photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setUpdateOrganizationHistory(data) {
        const { id, photoUrl, originalPath } = data;
        return instance.put(`aboutPhotoesAPI/${id}`, { id, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },
    setOrganizationHistoryDelete(id) {
        return instance.delete(`aboutPhotoesAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },

    // meeting

    setMeeting() {
        return instance.get(`aboutPanel6API`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setMeetingCreate(data) {
        const { title_uz, description_uz, photoUrl } = data;
        return instance.post(`aboutPanel6API`, { title_uz, description_uz, photoUrl })
            .then(async (response) => {
                return await response.data;
            });
    },
    setMeetingUpdate(data) {
        const { id, title_uz, description_uz, photoUrl, originalPath } = data;
        return instance.put(`aboutPanel6API/${id}`, { id, title_uz, description_uz, photoUrl: photoUrl ? photoUrl : originalPath })
            .then(async (response) => {
                return await response.data;
            });
    },
    setMeetingDelete(id) {
        return instance.delete(`aboutPanel6API/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },
    // team members
    setTeamMembers() {
        return instance.get(`mainStaffsAPI`)
            .then(async (response) => {
                return await response.data;
            });
    },
    setTeamMembersCreate(data) {
        const { id, fullName, photoUrl, originalPath, veterans = true, staffPosition = {name_uz: "string",}, staffType={  name_uz: "string",} } = data;

        debugger
        return instance.post(`mainStaffsAPI`, { fullName, photoUrl: photoUrl ? photoUrl : originalPath, veterans, staffType, staffPosition })
            .then(async (response) => {
                return await response.data;
            });
    },
    /* 
    "fullName": "sdfsdf",
    "photoUrl": "string",
    "veterans": true,
    "staffPosition": {
        "name_uz": "string",
        "name_krl": "string",
        "name_ru": "string",
        "name_en": "string"
    },
    "staffType": {
        "name_uz": "string",
        "name_krl": "string",
        "name_ru": "string",
        "name_en": "string"
    }
    */
    setTeamMembersUpdate(data) {
        const { id, fullName, photoUrl, originalPath, veterans = true, staffPosition = {name_uz: "string",}, staffType={  name_uz: "string",} } = data;
        debugger

        return instance.put(`mainStaffsAPI/${id}`, { id, fullName, photoUrl: photoUrl ? photoUrl : originalPath, veterans, staffType, staffPosition })
            .then(async (response) => {
                return await response.data;
            });
    },
    setTeamMembersDelete(id) {
        return instance.delete(`mainStaffsAPI/${id}`)
            .then(async (response) => {
                return await response.data;
            });
    },
}