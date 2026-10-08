import { useCart } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <p className="mb-2 text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard