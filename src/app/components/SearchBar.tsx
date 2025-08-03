'use client';
import { useProducts } from '../providers/ProductsContext';

export default function SearchBar() {
  const { setSearch } = useProducts();

  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      onChange={(e) => setSearch(e.target.value)}
      className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-64"
    />
  );
}