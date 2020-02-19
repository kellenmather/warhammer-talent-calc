import axios from 'axios';

export default() => {

    // retrieve ip address
    const ip = window.location.hostname;

    // set server location
    return axios.create({
        baseURL: 'http://'+ ip +':4000',
        withCredentials: true
    });
};
