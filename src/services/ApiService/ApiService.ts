import {RequestType} from 'constants/RequestType';
import {makeBearer} from 'helpers/apiHelpers';
import {ErrorResponse, IApiService} from 'models/sevices/IApiService';
import AlertService from 'services/AlertService';
import {
  getRequestHeaders,
  getRequestMethod,
  getRequestUrl,
  isNeedAuthorization,
} from './RequestHelpers';
import translations from 'localization';

export class ApiService implements IApiService {
  static token: string | undefined = undefined;
  baseUrl: string = '';

  constructor(baseUrl: string) {
    this.setBaseUrl(baseUrl);
  }

  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  setToken(token: string) {
    ApiService.token = token;
  }

  /*
       I sware that all responses with status >= 400 will be consist with ErrorResponse interface
       if response has status and status >= 400 then handle error
  */

  executeRequest<T>(requestType: RequestType, body?: Object) {
    return new Promise<T>((resolve, reject) => {
      const method = getRequestMethod(requestType);
      const requestUrl = `${this.baseUrl}${getRequestUrl(requestType)}`;
      let headers = getRequestHeaders(requestType);

      console.log(body);

      const requestParams: RequestInit = {
        method,
        body: JSON.stringify(body),
        headers,
      };

      const {url, params} = this.requestInterceptor(
        requestUrl,
        requestParams,
        requestType,
      );

      fetch(url, params)
        .then(response => {
          if (response.status === 201) {
            return response;
          }
          return response.json();
        })
        .then(response => {
          console.log(response);
          let processedResponse = response;
          try {
            processedResponse = this.responseInterceptor(response);
            if (response.status && response.status >= 400) {
              this.errorHandler(processedResponse, requestType);
            }
          } catch (err) {
            reject(err);
          }

          resolve(processedResponse);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  private requestInterceptor(
    url: string,
    params: RequestInit,
    requestType: RequestType,
  ) {
    const processedUrl = url;
    let processedParams = params;

    if (isNeedAuthorization(requestType) && ApiService.token) {
      processedParams.headers['Authorization'] = makeBearer(ApiService.token);
    }

    return {
      url: processedUrl,
      params: processedParams,
    };
  }

  private responseInterceptor(response: Response) {
    console.log(response);
    return response;
  }

  private errorHandler(response: ErrorResponse, requestType: RequestType) {
    switch (requestType) {
      case RequestType.LOGIN:
        break;
      default:
        const errorTitle = translations[response.translation_code];
        const errorMessage = translations[response.message_translation_code];
        AlertService.showDropDownAlert(
          'error',
          errorTitle || response.error,
          errorMessage || response.message,
        );
    }
    throw response;
  }
}
