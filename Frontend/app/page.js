import ProductComponent from '@/components/ProductComponent'
import ProductHeader from '@/components/ProductHeader'
import Banner from '@/layouts/banner'
import CategoryComponent from '@/layouts/categoryComponent'
import React from 'react'

function page() {
  return (
    <div>
      <CategoryComponent/> 
      <Banner/>
      <ProductHeader/>
      <ProductComponent/>
    </div>
  )
}

export default page