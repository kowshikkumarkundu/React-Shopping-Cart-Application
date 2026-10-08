import { useCart } from "../context/CartContext"

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart()

  return (
    <div className="flex flex-col gap-4 border-b border-gray-200 py-6 last:border-b-0 sm:flex-row sm:items-center">

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

          <p className="mt-1 text-sm text-gray-500">
            {item.category}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            ${item.price} each
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg transition hover:bg-gray-100"
        >
          −
        </button>

        <span className="w-6 text-center font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg transition hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between gap-6 sm:block sm:text-right">
        <p className="text-sm text-gray-500 sm:hidden">
          Subtotal
        </p>

        <p className="font-bold text-gray-900">
          ${item.price * item.quantity}
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