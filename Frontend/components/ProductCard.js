'use client'

import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({item}) {
  
  let handleCart=(item)=>{
    
    fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/addtocart`,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
    {
      cartId:item._id,
      ownerId:"6933e3def0c48d04280e0b90",
      quantity:1,

    }
    )
})


.then(function(res){ console.log(res,"data") })
.catch(function(res){ console.log(res) })
    
  }
  
  return (
    <Container className='pt-4 px-2 sm:px-3' >
    <Row className='pb-0 mx-0 sm:mx-3 gx-2 sm:gx-3' xs='2' sm='3' lg='5'>
      {item.map((item)=>(
        <Col key={item._id} className='mb-3 d-flex justify-content-center' >
        <Card className='shadow-[2px_2px_10px_-2px_#ea580c] hover:scale-100 scale-90 hoverEffect w-100 ' style={{ maxWidth: '16rem', minWidth: '140px' }}>
      <Image className='border-b border-orange-200 rounded-md' width={250} height={200} alt='image' src={item.image} style={{ objectFit: 'cover', height: '255px', width: '100%' }} />
      <Card.Body className='p-2 sm:p-3'>
        
        <Card.Title className='text-sm sm:text-base'>{item.name}</Card.Title>
        <Card.Text className='text-xs sm:text-sm'>
          {item.saleprice?<span className='text-orange-600 font-bold font-sans'>৳{item.saleprice}&nbsp; &nbsp;<del className='text-black text-xs'>৳{item.regularprice}</del></span>:<span>৳{item.regularprice}</span>}
        </Card.Text>
        <Button onClick={()=>handleCart(item)} className='bg-orange-400! hover:bg-amber-600! w-100 py-1 text-xs sm:text-sm'>Add to cart</Button>
      </Card.Body>
    </Card>
    </Col>
    
   
      ))}
      
    </Row>
    </Container>
  )
}

export default ProductCard