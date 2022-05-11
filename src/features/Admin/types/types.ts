export interface ICustomer {
  username: string;
  address: string;
  mobileNumber: string;
  email: string;
  gender: number;
  id: number;
}
export interface IInitialAdminState {
  customers: ICustomer[];
  products: IProduct[];
}
export interface IProduct {
  id?: number;
  title: string;
  categoryId: number;
  price: number;
  sale: number;
  quantity: number;
  description: string;
  image: string;
  status: number;
}
