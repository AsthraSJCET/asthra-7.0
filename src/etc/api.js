import axios from 'axios';


const request_config_capture = function (config) {
    // const token = getAccessTokenSilently().then(token => {
    //     config['headers']['Authorization'] = token;
    // })
    // return config;
}
const request_error_capture = function (error) {
    return Promise.reject(error);
}
const response_capture = function (response) {
    return response;
}
const response_error_capture = function (error) {
    var err = ''
    try {
        err = error.response.data;
        if (error.response.status === 401) {
            //removeUserSession();
            //window.location.reload()
        } else if (error.response.status === 403) {
        } else {
        }
    } catch (e) {
        err = " - ";
    }
    return Promise.reject(error);
}
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
let baseURL = API_ENDPOINT;
let config = {
    baseURL: baseURL,
};
let infoxAPI = axios.create(config);
let publicAPI = axios.create(config);
infoxAPI.interceptors.request.use(request_config_capture, request_error_capture);
infoxAPI.interceptors.response.use(response_capture, response_error_capture);
export { infoxAPI, publicAPI }