'use client';

import { useProducts } from '../providers/ProductsContext';
import CardProduct from './CardProduct';

export default function ProductList() {
  const { products, loading} = useProducts();

  if (loading) return <p className="text-center py-8">Carregando produtos...</p>;

  return (
    <section className="mt-6 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 mt-6">
        {products.map(product => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
