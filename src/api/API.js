import api from 'axios';
import conf from '../utils/config';

const axiosInstance = api.create({
    baseURL: conf.apiURL,
    responseType: "json",
    headers: { "Access-Control-Allow-Origin": "*" }
});

export default {
    searchUser: function(params) {
        const {id, name} = params;

        const param = id || `?name_like=${name}`;
        return axiosInstance.get('/users/' + `${param}`);
    }
}

    
