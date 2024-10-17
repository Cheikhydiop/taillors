export class HttpClient {
    constructor(baseURL, defaultConfig = {}) {
      this.baseURL = baseURL;
      this.defaultConfig = defaultConfig;
    }
  
    async request(method, url, data = null, config = {}) {
      throw new Error('request method must be implemented');
    }
  
    async get(url, config = {}) {
      return this.request('GET', url, null, config);
    }
  
    async post(url, data, config = {}) {
      return this.request('POST', url, data, config);
    }
  
    async put(url, data, config = {}) {
      return this.request('PUT', url, data, config);
    }
  
    async delete(url, config = {}) {
      return this.request('DELETE', url, null, config);
    }
  
    async patch(url, data, config = {}) {
      return this.request('PATCH', url, data, config);
    }
  }