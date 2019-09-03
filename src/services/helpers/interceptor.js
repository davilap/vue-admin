import axios from 'axios';
import store from '../../store'
import auth from '../api/auth'

export default function setup() {
    axios.interceptors.request.use(function (config) {
        const token = store.getters.token;
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    }, function (err) {
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (err) {
        return Promise.reject(err);
    });

    axios.interceptors.response.use(null, (error) => {
        if (error.response && error.response.status === 401) {
            return auth.refreshToken(store.getters.token, store.getters.refreshToken)
                .then(response => {
                    store.dispatch('refreshToken', {
                        token: response.newAccessToken,
                        refreshToken: response.newRefreshToken
                    }).then(() => error.response.config.headers.Authorization = 'Bearer ' + response.accessToken);
                    return axios.request(error.response.config)
                });
        }
    }, function (err) {
        return Promise.reject(err);
    });
}