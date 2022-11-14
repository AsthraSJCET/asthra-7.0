import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
let baseURL = API_ENDPOINT;
let config = {
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
};
let publicAPI = axios.create(config);
export { publicAPI }