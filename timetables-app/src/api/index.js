import axios from 'axios'

export const BASE_URL = 'https://mytapp.azurewebsites.net/';

export const ENDPOINTS = {
    getGroups: "Groups",
    getTimetables: "Timetables",
    getCallSchedule: "CallSchedules"

}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id)
    }
} 