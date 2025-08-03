'use client';
import { useCart } from '../providers/CartContext';

export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4">Carrinho</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="space-y-4 max-h-64 overflow-y-auto">
              {cart.map((product) => (
                <li key={product.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{product.title}</p>
                    <p className="text-sm text-gray-600">R$ {product.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 text-sm hover:underline cursor-pointer"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between items-center">
              <strong>Total:</strong>
              <span className="font-bold text-blue-600">R$ {total.toFixed(2)}</span>
            </div>
          </>
        )}

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}