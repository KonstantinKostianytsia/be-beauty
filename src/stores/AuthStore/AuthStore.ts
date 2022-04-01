import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistStoreNames} from 'constants/PersistStoreNames';
import {makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import {IApiService} from 'models/sevices/IApiService';

export class AuthStore {
  private apiService: IApiService;

  accessToken: string | undefined = undefined;

  constructor(apiService: IApiService) {
    this.apiService = apiService;

    makeAutoObservable(this);
    makePersistable(this, {
      name: PersistStoreNames.AUTH_STORE,
      properties: ['accessToken'],
      storage: AsyncStorage,
    });
  }

  setAccessToken(value: string) {
    this.accessToken = value;
  }
}
