# ShopCart — React Shopping Cart

A modern and responsive shopping cart application built with React and Tailwind CSS.

## Features

- Product catalog with responsive grid
- Product search
- Category filtering
- Product sorting
- Add products to cart
- Increase/decrease product quantity
- Remove products from cart
- Real-time cart item count
- Real-time cart total price
- Cart persistence using localStorage
- Separate product and cart pages
- Responsive design for mobile, tablet, and desktop
- Loading and empty states
- Reusable React components
- Context API for global cart state
- Custom `useCart` hook

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Context API
- JavaScript
- localStorage

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   └── CartSummary.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── products.js
│
├── hooks/
│   └── useCart.js
│
├── App.jsx
├── main.jsx
└── index.css
