import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import ProductGrid from "./components/ProductGrid"
import Cart from "./components/Cart"

function App() {
  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <Routes>

          <Route
            path="/"
            element={<ProductGrid />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>

      </div>

    </main>
  )
}

export default App