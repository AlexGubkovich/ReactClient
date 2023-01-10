import axios from 'axios'

export const BASE_URL = 'http://localhost:5074/';

export const ENDPOINTS = {
    getGroups: "Group",
    getTimetables: "Timetables"
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id)
    }
} 