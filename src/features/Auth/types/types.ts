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

export interface IInitialState {
  token: string | null;
  isLogin: boolean;
}
export interface IRole {
  _id: number;
  name: string;
}
