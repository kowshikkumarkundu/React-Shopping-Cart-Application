import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"

function Cart() {
  const { cartItems, totalItems, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="mt-16">
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
            🛒
          </div>

          <h2 className="text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to your cart to get started.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Shopping Cart
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

        {/* Cart Items */}
        <div className="rounded-2xl border border-gray-200 bg-white px-5 shadow-sm">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">
            Order Summary
          </h3>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Items ({totalItems})
              </span>

              <span className="font-medium text-gray-900">
                ${totalPrice}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Shipping
              </span>

              <span className="font-medium text-gray-900">
                Free
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ${totalPrice}
                </span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </section>
  )
}

export default Cart