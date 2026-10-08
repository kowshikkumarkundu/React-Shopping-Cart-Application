import { useCart } from "../context/CartContext"

function Navbar() {
  const { totalItems } = useCart()

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            ShopCart
          </h1>

          <p className="text-xs text-gray-500">
            Simple. Fast. Reliable.
          </p>
        </div>

        <div className="relative">
          <button className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            🛒 Cart
          </button>

          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar