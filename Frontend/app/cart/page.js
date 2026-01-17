import CartComponent from '@/components/CartComponent'
import React from 'react'
import { Container } from 'react-bootstrap'

const Cart = async() => {
const data=await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/viewaddtocart`)
const posts=await data.json()
console.log(posts);


  return (
    <Container>
        <CartComponent cartData={posts}/>
    </Container>
  )
}

export default Cart