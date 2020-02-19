import axios from 'axios';
import api from '@/services/api';

const ApiService = {

    setHeader() {
        axios.defaults.headers.common['Authorization'] = 'test token';
    },

    query(resource, params) {
        return api().get(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        })
    },

    get(resource, slug ="") {
        return api().get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        })
    },

    post(resource, params) {
        return api().post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return api().put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return api().put(`${resource}`, params);
    },

    delete(resource, params) {
        return api().delete(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }

};

export default ApiService
