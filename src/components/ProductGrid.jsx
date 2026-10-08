import { useEffect, useMemo, useState } from "react"

import products from "../data/products"
import ProductCard from "./ProductCard"

function ProductGrid() {
  const [productList, setProductList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("default")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        await new Promise((resolve) => {
          setTimeout(resolve, 500)
        })

        setProductList(products)
      } catch (error) {
        setError("Failed to load products.")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(productList.map((product) => product.category))
    ]
  }, [productList])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const filtered = productList.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory

      const matchesSearch =
        normalizedSearch === "" ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price

        case "price-high":
          return b.price - a.price

        case "name-a-z":
          return a.title.localeCompare(b.title)

        case "name-z-a":
          return b.title.localeCompare(a.title)

        default:
          return 0
      }
    })
  }, [
    productList,
    selectedCategory,
    searchTerm,
    sortOption
  ])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSortOption("default")
  }

  if (loading) {
    return (
      <section className="py-6">
        <div className="mb-8">
          <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-9 w-40 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-72 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="h-56 animate-pulse bg-gray-200" />

              <div className="space-y-3 p-5">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />
                <div className="h-9 w-full animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Try Again
          </button>
        </div>
      </section>
    )
  }

  if (productList.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
            SHOP
          </div>

          <h2 className="mt-6 text-xl font-bold text-gray-900">
            No products available
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            There are currently no products to display.
            Please try again later.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Refresh
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-4 sm:py-6">
      <div className="mb-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Our Collection
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              Products
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore our latest products and find what you need.
            </p>
          </div>

          <div className="w-fit rounded-full bg-gray-100 px-4 py-2">
            <p className="text-sm font-medium text-gray-600">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "Product"
                : "Products"}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
          />

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            aria-label="Sort products"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100 sm:w-56"
          >
            <option value="default">
              Sort By
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="name-a-z">
              Name: A to Z
            </option>

            <option value="name-z-a">
              Name: Z to A
            </option>
          </select>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try a different search term or category.
          </p>

          <button
            onClick={clearFilters}
            className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductGrid