import useCart from "../hooks/useCart"

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart()

  const subtotal = item.price * item.quantity

  return (
    <div className="flex flex-col gap-5 border-b border-gray-200 py-6 last:border-b-0 sm:flex-row sm:items-center">

      {/* Product */}
      <div className="flex min-w-0 flex-1 items-center gap-4">

        <img
          src={item.image}
          alt={item.title}
          className="h-20 w-20 shrink-0 rounded-xl object-cover"
        />

        <div className="min-w-0">

          <h3 className="truncate font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            {item.category}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            ${item.price.toFixed(2)} each
          </p>

        </div>

      </div>


      {/* Quantity Controls */}
      <div className="flex items-center gap-2">

        <button
          onClick={() => decreaseQuantity(item.id)}
          aria-label={`Decrease quantity of ${item.title}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium text-gray-700 transition hover:bg-gray-100 active:scale-95"
        >
          −
        </button>

        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-900">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          aria-label={`Increase quantity of ${item.title}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium text-gray-700 transition hover:bg-gray-100 active:scale-95"
        >
          +
        </button>

      </div>


      {/* Subtotal */}
      <div className="flex items-center justify-between gap-4 sm:w-28 sm:block sm:text-right">

        <p className="text-xs font-medium uppercase tracking-wide text-gray-400 sm:hidden">
          Subtotal
        </p>

        <p className="font-bold text-gray-900">
          ${subtotal.toFixed(2)}
        </p>

      </div>


      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="self-start text-sm font-medium text-red-500 transition hover:text-red-700 sm:self-auto"
      >
        Remove
      </button>

    </div>
  )
}

export default CartItem