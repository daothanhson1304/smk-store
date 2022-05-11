export interface ISignInFormData {
  username: string;
  password: string;
}
export interface ISignUpFormData {
  username: string;
  password: string;
  email: string;
  roles: IRole[];
  mobileNumber: string;
  address: string;
  gender: number;
}
export interface IUserInfo {
  email: string;
  username: string;
  token: string | null;
  roles: string[];
  id: number;
}
export interface IInitialState {
  userInfo: IUserInfo;
  isAuthUser: boolean;
}
export interface IRole {
  id: number;
  name: string;
}
