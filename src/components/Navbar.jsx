import { useNavigate, useLocation } from "react-router-dom"

import useCart from "../hooks/useCart"

function Navbar() {
  const { totalItems, totalPrice } = useCart()

  const navigate = useNavigate()
  const location = useLocation()

  const isHomePage = location.pathname === "/"
  const isCartPage = location.pathname === "/cart"

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="group text-left"
        >
          <h1 className="text-xl font-bold tracking-tight text-gray-900 transition group-hover:text-gray-600">
            ShopCart
          </h1>

          <p className="text-xs text-gray-500">
            Simple. Fast. Reliable.
          </p>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              isHomePage
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => navigate("/cart")}
            className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition ${
              isCartPage
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Cart

            {totalItems > 0 && (
              <span
                className={`absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs font-bold ${
                  isCartPage
                    ? "bg-gray-700 text-white"
                    : "bg-black text-white"
                }`}
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar