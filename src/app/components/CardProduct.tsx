import { useCart } from '../providers/CartContext';

export interface Product {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;  
  }
}

export default function CardProduct({ product }:Product) {
  const { addToCart } = useCart();

  return (
    <div className="w-64 h-[400px] flex flex-col cursor-pointer border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />

      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
          <p className="text-red-600 font-bold mt-1">R$ {product.price}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm cursor-pointer"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}