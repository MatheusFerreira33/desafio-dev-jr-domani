'use client';
import { useState } from 'react';
import { useCart } from '../providers/CartContext';
import CartModal from './CartModal';
import SearchBar from './SearchBar';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-blue-100 text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Catálogo de Produtos
        </h1>

        <div className="w-full sm:w-auto flex-1">
          <SearchBar />
        </div>

        <div className="flex justify-center sm:justify-end">
        <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto cursor-pointer"
        >
            Carrinho ({cart.length})
        </button>
        </div>
      </div>

      {open && <CartModal onClose={() => setOpen(false)} />}
    </header>
  );
}