import { IAuthRequest } from './i-auth-request';

export interface IAuthNotification {
  Type: AuthType;
  Request: IAuthRequest;
}

export enum AuthType {
  None = 0,
  Guest = 1,
  Login = 2,
}
