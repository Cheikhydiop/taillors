import { HttpClient } from '../httpClient.js';

export class FetchHttpClient extends HttpClient {
  constructor(baseURL, defaultConfig = {}) {
    super(baseURL, defaultConfig);
  }

  async request(method, url, data = null, config = {}) {
    const fullUrl = `${this.baseURL}${url}`;
    const options = {
      method,
      ...this.defaultConfig,
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultConfig.headers,
        ...config.headers,
      },
    };

    // Ajout du token d'authentification
    const token = localStorage.getItem('token');
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(fullUrl, options);
      
      // Gestion des erreurs HTTP
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error in ${method} request:`, error);
      throw error;
    }
  }
}