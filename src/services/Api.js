import apisauce from 'apisauce';

const appBaseUrl = 'https://api.veriff.me/v1';
const API_KEY = '3885bed0-710f-4b06-b84f-7dd982e4c730';
// const API_SECRET = '32738914-ab4c-4da5-9b0a-c57cda033154';

const create = (baseURL = appBaseUrl) => {

    const api = apisauce.create({
        baseURL,
        timeout: 5000,
        headers: {
            'x-auth-client': API_KEY,
            'content-type': 'application/json'
        }
    })

    const signUpUserApi = (body) => api.post(`${appBaseUrl}/sessions`, body)

    return {
        signUpUserApi
    }
}

export default {
    create
}