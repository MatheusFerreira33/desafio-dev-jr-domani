import Header from './components/Header';
import ProductList from './components/ProductList';
import { ProductsProvider } from './providers/ProductsContext';

export default function Home() {
  return (
    <ProductsProvider>
      <Header />
      <ProductList />
    </ProductsProvider>
);
}
