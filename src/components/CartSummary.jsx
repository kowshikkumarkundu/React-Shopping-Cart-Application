import useCart from "../hooks/useCart"

function CartSummary() {
  const { totalItems, totalPrice } = useCart()

  return (
    <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">
        Order Summary
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-medium text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Items
          </span>

          <span className="font-medium text-gray-900">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Shipping
          </span>

          <span className="font-medium text-gray-900">
            Free
          </span>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">
              Total
            </span>

            <span className="text-2xl font-bold text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button
        className="mt-6 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
      >
        Proceed to Checkout
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-gray-400">
        Checkout functionality is not included in this assignment.
      </p>
    </div>
  )
}

export default CartSummary