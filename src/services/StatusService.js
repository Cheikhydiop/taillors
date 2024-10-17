import { BaseService } from './baseService';

class StatusService extends BaseService {
  constructor() {
    super('/status');
  }

  createStatus = (content) => this.post('/', { content });

  getUserStatuses = () => this.get('/all');

  getFollowedUserStatuses = () => this.get('/followed');

  deleteStatus = (statusId) => this.delete(`/del/${statusId}`);

  sendMessageToStatus = (statusId, message) => this.post('/message', { statusId, message });

  getStatus = (statusId) => this.get(`/${statusId}`);
}

export const statusService = new StatusService();
