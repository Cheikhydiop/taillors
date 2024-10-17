import { BaseService } from './baseService';

class CategoryService extends BaseService {
  constructor() {
    super('/categories');
  }

  getAllCategories = () => this.get('/');
  
  createCategory = (categoryData) => this.post('/', categoryData);
}

export const categoryService = new CategoryService();
