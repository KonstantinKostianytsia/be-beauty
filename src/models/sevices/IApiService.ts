import {RequestType} from 'constants/RequestType';

export interface IApiService {
  executeRequest: <T>(requestType: RequestType, body?: Object) => Promise<T>;
  setToken: (token: string) => void;
  setBaseUrl: (url: string) => void;
}

export interface ErrorResponse {
  error: string;
  translation_code: string;
  message_translation_code?: string;
  message?: string;
  status: number;
}
