export enum AuthVariant {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  APPLE = 'APPLE',
}

export interface AuthorizationRequestBody {
  email: string;
  authVariant: AuthVariant;
}

export interface AuthorizationResponse {
  access: string;
  refresh: string;
}

export interface CreateAccountRequestBody {
  email: string;
  authVariant: AuthVariant;
  firstName: string;
  lastName: string;
}
