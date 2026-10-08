import { useNavigate } from "react-router-dom"

import useCart from "../hooks/useCart"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

function Cart() {
  const {
    cartItems,
    totalItems
  } = useCart()

  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-3xl py-10 sm:py-16">
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
            CART
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            You haven't added any products to your cart yet.
            Browse our products and find something you like.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-7 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-4 sm:py-6">
      <div className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Your Cart
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              Shopping Cart
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {totalItems}{" "}
              {totalItems === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-fit text-sm font-medium text-gray-600 transition hover:text-black"
          >
            ← Continue Shopping
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-gray-200 bg-white px-5 shadow-sm sm:px-6">
          <div className="border-b border-gray-200 py-5">
            <h3 className="font-semibold text-gray-900">
              Cart Items
            </h3>
          </div>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <CartSummary />
      </div>
    </section>
  )
}

export default Cart