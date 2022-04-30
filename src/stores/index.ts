import {IApiService} from 'models/sevices/IApiService';
import {AuthStore} from 'stores/AuthStore/AuthStore';
import {ApiService} from 'services/ApiService/ApiService';
import {BACKEND_URL} from 'constants/RestAPI';

export class RootStore {
  private apiService: IApiService = new ApiService(BACKEND_URL);

  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this.apiService);
  }
}

const rootStore = new RootStore();

export default rootStore;
