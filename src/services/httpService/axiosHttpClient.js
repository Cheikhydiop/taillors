import axios from 'axios';
import { HttpClient } from '../httpClient.js';  // Assurez-vous que le chemin est correct

export class AxiosHttpClient extends HttpClient {
  constructor(baseURL, defaultConfig = {}) {
    super(baseURL, defaultConfig);
    this.instance = axios.create({
      baseURL,
      ...defaultConfig,
    });

    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async request(method, url, data = null, config = {}) {
    try {
      const response = await this.instance.request({
        method,
        url,
        data,
        ...config,
      });
      return response.data;
    } catch (error) {
      console.error(`Error in ${method} request:`, error);
      throw error;
    }
  }
}