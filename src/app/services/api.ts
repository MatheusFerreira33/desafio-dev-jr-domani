import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 3000
});

export default api;