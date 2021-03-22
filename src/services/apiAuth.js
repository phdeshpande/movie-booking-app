import axios from 'axios';
import { apiConfig } from "../config/apiConfig";

const APIKit = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 1000,
  headers: {
    "Content-Type": 'application/json',
    Accept: 'application/json',
  }
});

export const apiGet = (api) => { 
  return APIKit.get(api);
}

export const apiPost = (api, payload = {}) => {
  return APIKit.post(api, payload);
}

APIKit.interceptors.response.use(response => {
  // console.log(JSON.stringify(response));
  return response;
}, error => {
  if (error.response.status === 401) {
   console.warn('Err401: '+JSON.stringify(error.response.data.error));
   return Promise.reject(error);
  } else {
   console.warn('APIKitelseErr: '+JSON.stringify(error.response));
   return Promise.reject(error);
  }
 });
