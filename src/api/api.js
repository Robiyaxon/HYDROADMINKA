import * as axios from "axios";

const instance = axios.create({
    responseType: "json",
    withCredentials: true,
    baseURL: 'http://softcity.uz:9999/api/',
    headers:     {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export const usersAPI = {
    login(email, password) {
        return instance.post(`LoginAPI?Email=${email}&Password=${password}`)
            .then(async(response) => {
                return await response.data;
            });
    },
}