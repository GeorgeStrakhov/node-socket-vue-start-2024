import axios from 'axios';
import { eventBus } from '@/helpers/eventBus';
import AuthService from '@/services/authService';
import { router } from '@/router';

//poll freq
const pollFreq = 500; //every half a second

// Base Axios instance
const api = axios.create({
    baseURL: '/api',
    headers: {
        "Content-type": "application/json"
    },
});

// Function to handle API requests
const makeRequest = async (method, url, data = null) => {
    try {
        const response = await api[method](url, data);
        return response.data || response;
    } catch (error) {
        let err = error || error.message
        if (error.response && error.response.data && error.response.data.error) {
            err = error.response.data.error;
        }
        if (error.response && error.response.data && error.response.data.detail) {
            err = error.response.data.detail;
        }
        throw new Error(err);
    }
};

const apiPost = (url, data) => makeRequest('post', url, data);
const apiPut = (url, data) => makeRequest('put', url, data);
const apiGet = (url) => makeRequest('get', url);
const apiDelete = (url) => makeRequest('delete', url);

const showError = (error="something went wrong") => {
    console.log(error);
    const payload = {severity: 'error', summary: 'Sorry...', detail: error, life: 3000};
    eventBus.emit('toast', payload);
};

const showSuccess = (message="it worked!") => {
    const payload = {severity: 'success', summary: 'Hooraay!', detail: message, life: 3000};
    eventBus.emit('toast', payload);
};

export { apiPost, apiGet, apiPut, apiDelete, showError, showSuccess };
