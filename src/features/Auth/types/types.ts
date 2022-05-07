export interface ISignInFormData {
  username: string;
  password: string;
}
export interface ISignUpFormData {
  username: string;
  password: string;
  email: string;
  roles: IRole[];
}
export interface IUserInfo {
  email: string;
  username: string;
}
export interface IInitialState {
  token: string | null;
  isAuthUser: boolean;
  userInfo: IUserInfo;
}
export interface IRole {
  _id: number;
  name: string;
}
