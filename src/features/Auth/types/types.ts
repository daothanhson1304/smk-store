export interface ISignInFormData {
  username: string;
  password: string;
}
export interface ISignUpFormData {
  username: string;
  password: string;
  email: string;
}

export interface IInitialState {
  token: string | null;
  isLogin: boolean;
}
