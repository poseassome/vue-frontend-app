import UserRepository from '@/api/Repositories/UserRepository';
import ProductListRepository from './Repositories/ProductListRepository';

const repositories = {
  user: UserRepository,
  products: ProductListRepository,
};
export default {
  get: (name) => repositories[name],
};
