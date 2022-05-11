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
}
export interface IInitialState {
  token: string | null;
  isAuthUser: boolean;
  userInfo: IUserInfo;
  roles: string[];
}
export interface IRole {
  id: number;
  name: string;
}
