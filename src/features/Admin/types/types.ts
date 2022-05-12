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
  orders: IOrder[];
  invoices: IInvoice[];
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
export interface IInvoiceRequest {
  userId: number;
  productIds: number[];
}
export interface IInvoice {
  userId: number;
  productId: number | undefined;
  quantity: number;
  totalPrice: number;
  status: number;
  createAt?: string;
}
export interface IOrder {
  id?: number;
  userId: number;
  productId: number | undefined;
  productImage: string;
  quantity: number;
  totalPrice: number;
  status: number;
  productTitle: string;
  productDes: string;
  createAt?: string;
}
