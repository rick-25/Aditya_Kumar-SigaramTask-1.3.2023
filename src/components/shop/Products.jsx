import React from 'react'
import ProductCard from './ProductCard'

function Products({ products, addToCart }) {
  return (
    <div className='flex-1 border border-black p-5 overflow-hidden'>
      <h4 className="text-lg font-semibold mb-3 text-center">Products</h4>
      <div className='overflow-scroll h-full flex flex-col gap-2'>
        {products.map(p => (
          <ProductCard product={p} add={addToCart}/>
        ))}
      </div>
    </div>
  )
}

export default Products