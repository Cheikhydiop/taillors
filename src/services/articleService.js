import { BaseService } from './baseService';

class ArticleService extends BaseService {
  constructor() {
    super('/articles');
  }

  getAllArticles = () => this.get();
  getArticle = (id) => this.get(`/${id}`);
  createArticle = (articleData) => this.post('', articleData);
  updateArticle = (id, articleData) => this.put(`/${id}`, articleData);
  deleteArticle = (id) => this.delete(`/${id}`);
  listArticlesByCategoryForStore = (storeId, categoryId) => this.get(`/store/${storeId}/category/${categoryId}`);
  listAllCategoriesAndArticles = () => this.get('/categories');
  addArticleToStore = (storeId, articleData) => this.post(`/store/${storeId}`, articleData);
  deleteArticleFromStore = (storeId, articleId) => this.delete(`/stores/${storeId}/articles/${articleId}`);
  deleteCategoryForStore = (storeId, categoryId) => this.delete(`/store/${storeId}/category/${categoryId}`);
  deleteStore = (storeId) => this.delete(`/store/${storeId}`);
  listAllCategoriesForStore = (storeId) => this.get(`/store/${storeId}/categories`);
  createStore = (storeData) => this.post('/stores', storeData);
}

export const articleService = new ArticleService();