import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistStoreNames} from 'constants/PersistStoreNames';
import {RequestType} from 'constants/RequestType';
import {makeAutoObservable} from 'mobx';
import {getPersistedStore, makePersistable} from 'mobx-persist-store';
import {IApiService} from 'models/sevices/IApiService';
import {
  AuthorizationRequestBody,
  AuthorizationResponse,
  CreateAccountRequestBody,
} from 'models/stores/auth/AuthStoreModels';

export class AuthStore {
  private apiService: IApiService;

  accessToken: string | undefined = undefined;
  hydrationFinished: boolean = false;

  constructor(apiService: IApiService) {
    this.apiService = apiService;

    makeAutoObservable(this);
    makePersistable(this, {
      name: PersistStoreNames.AUTH_STORE,
      properties: ['accessToken'],
      storage: AsyncStorage,
    }).then(value => {
      this.setHydrationFinished(true);
    });

    if (this.accessToken) {
      this.apiService.setToken(this.accessToken);
    }
  }

  /// computed
  get isAuthorized() {
    return this.accessToken && this.accessToken.length > 0;
  }

  /// actions
  getPersistedStore() {
    return getPersistedStore(this);
  }

  setHydrationFinished(value: boolean) {
    this.hydrationFinished = value;
  }

  setAccessToken(value: string) {
    console.log(value);
    this.accessToken = value;
    this.apiService.setToken(value);
  }

  authorize(params: AuthorizationRequestBody) {
    return new Promise<void>((resolve, reject) => {
      this.apiService
        .executeRequest<AuthorizationResponse>(RequestType.LOGIN, {
          email: params.email,
          auth_variant: params.authVariant,
        })
        .then(value => {
          this.setAccessToken(value.access);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  createAccount(params: CreateAccountRequestBody) {
    return new Promise<void>((resolve, reject) => {
      this.apiService
        .executeRequest(RequestType.CREATE_ACCOUNT, {
          email: params.email,
          auth_variant: params.authVariant.toString(),
          last_name: params.lastName,
          first_name: params.lastName,
        })
        .then(() => resolve())
        .catch(err => {
          reject(err);
        });
    });
  }
}
