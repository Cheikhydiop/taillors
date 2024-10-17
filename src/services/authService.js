import { BaseService } from './baseService';

class AuthService extends BaseService {
  constructor() {
    super('/users');
  }

  register = async (userData) => {
    try {
      const response = await this.post('/register', userData);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  login = async (credentials) => {
    try {
      const response = await this.post('/login', credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  getCurrentUser = () => this.get('/profile');

  isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  getToken = () => {
    return localStorage.getItem('token');
  };
}

const authService = new AuthService();
export default authService;