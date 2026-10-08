import useCart from "../hooks/useCart"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>


      {/* Product Information */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.category}
        </p>


        {/* Title */}
        <h2 className="min-h-14 text-lg font-semibold leading-7 text-gray-900">
          {product.title}
        </h2>


        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between gap-3">

          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>


          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  )
}

export default ProductCard