import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 5000,
  responseType: 'json',
});
axiosInstance.interceptors.request.use((request: any) => {
  const token = localStorage.getItem('token');
  const accessHeader = token ? `Bearer ${token}` : `Bearer`;
  request.headers['Authorization'] = accessHeader;
  return request;
});
export default axiosInstance;
