import React from 'react'
import ProductCard from './ProductCard'

async function ProductComponent() {

  const data=await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/viewproduct`)
 const post=await data.json()
  return (
  <ProductCard item={post}/>
  )
}

export default ProductComponent