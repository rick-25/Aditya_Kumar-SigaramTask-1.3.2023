import React from 'react'
import ProductCard from './ProductCard'

function Cart({ products }) {
  return (
    <div className='w-72 border p-5'>
      <h4 className="text-lg font-semibold mb-3 text-center">Cart</h4>
      <div>
        {products.map(p => (
            <ProductCard product={p} added/>
        ))}
      </div>
    </div>
  )
}

export default Cart