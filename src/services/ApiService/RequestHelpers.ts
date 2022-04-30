import {RequestType} from 'constants/RequestType';

export const getRequestUrl = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.CREATE_ACCOUNT:
      return 'auth/create_user';
    case RequestType.LOGIN:
      return 'auth/login';
  }
};

export const getRequestMethod = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.CREATE_ACCOUNT:
    case RequestType.LOGIN:
      return 'post';
    default:
      return 'get';
  }
};

export const getRequestHeaders = (requestType: RequestType) => {
  switch (requestType) {
    default:
      return {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
  }
};

export const isNeedAuthorization = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.CREATE_ACCOUNT:
    case RequestType.LOGIN:
      return false;
    default:
      return true;
  }
};
