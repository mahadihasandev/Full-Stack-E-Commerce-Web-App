'use client'
import { CircleMinus, CirclePlus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const CartComponent = ({cartData}) => {
  const [refresh,setRefresh]=useState(false)
  console.log(refresh);
  
let totalPrice=cartData.reduce((accumulator,currentItem)=>{
   return accumulator+=currentItem.cartId.saleprice?currentItem.cartId.saleprice*currentItem.quantity:currentItem.cartId.regularprice*currentItem.quantity
},0)
const tax=totalPrice*10/100
const finalPrice=totalPrice+tax+150

 const handleQuantity =(item,type)=>{
   if(type=='increment'){
      item.quantity+=1
   }else if(type=='decrement'&&item.quantity>1){
    item.quantity-=1
   }
  setRefresh(!refresh)
      fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/addtocart?type=${type}`,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(
    {
      cartId:item.cartId._id,
      
      quantity:1,

    }
    )
})


.then(function(res){ 
  
 })
.catch(function(res){ console.log(res) })  
  
 }


 
  
  return (
    <div className='h-screen'>
        <Table striped bordered hover style={{ 
      '--bs-table-striped-bg': '#FFF3E0', // Light orange for stripes
      '--bs-table-hover-bg': '#FFE0B2',   // Deep orange for hover
      '--bs-table-hover-color': '#white'  // Optional: makes text white on hover for contrast
    }}>
      <thead>
        <tr>
            <th>No.</th>
          <th>Image</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Total</th>
          
        </tr>
      </thead>
      <tbody>
        {
          cartData.map((item,index)=>(
           <tr key={item._id}>
          <td>{index+1}</td>
          <td>
             {item.cartId&& <Image src={item.cartId?.image} height={50} width={50} alt='image'/>}
            </td>
          <td>{item.cartId?.name}</td>
          <td className=' h-full!'>
            <div className='flex gap-2 justify-center'>
             <CircleMinus onClick={()=>(handleQuantity(item,"decrement"))} className='text-orange-600 ' />
            <div>{item.quantity}</div>
            
            <CirclePlus onClick={()=>(handleQuantity(item,"increment"))} className='text-orange-600 ' />
            </div>
            </td>
            
          <td>৳
            {item.cartId?.saleprice?item.cartId?.saleprice:item.cartId?.regularprice}
          </td>
         
          <td>৳{item.cartId?.saleprice?item.cartId.saleprice*item.quantity:item.cartId?.regularprice*item.quantity}</td>
         
        </tr>

     
          ))}

      </tbody>
    </Table>

      <Table striped bordered hover style={{ 
      '--bs-table-striped-bg': '#FFF3E0', // Light orange for stripes
      '--bs-table-hover-bg': '#FFE0B2',   // Deep orange for hover
      '--bs-table-hover-color': '#white'  // Optional: makes text white on hover for contrast
    }}>
      <thead>
        <tr>
          <th>Retail Price</th>
          <th>Tax</th>
          <th>Delivery</th>
          <th>Total price</th>         
        </tr>
      </thead>
      <tbody>
           <tr >
          <td>{totalPrice}</td>
          <td>{tax} </td>
          <td>150</td>
          <td>{finalPrice}</td>
         
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default CartComponent