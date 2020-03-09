/**
 * Request service for fetching data from backend API.
 */
import axios from 'axios';
import config from '../config.json';

export function makeRequest(resourceUrl) {
    let response = axios.get(resourceUrl)
        .then((response) => {
            return response;
        })
        .catch(function (error) {
            return error;
        });

    return response;
}

/**
 * Resource methods
 */
export function getBlogIndex() {
    const resourceUrl = config['api']['baseUrl'] + config['api']['routes']['blog-index'];

    return makeRequest(resourceUrl);
}