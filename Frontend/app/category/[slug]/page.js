import CategoryComponent from '@/layouts/categoryComponent'
import { ul } from 'motion/react-client'
import React from 'react'

export default async function Category({params}) {
  let slug=await params
   const data=await fetch(`${process.env.LOCAL_API}/api/v1/product/viewallsubcategory?slug=${slug.slug}`)
    const posts=await data.json()
    console.log(posts);
    
  
  return (
    <div>
      {
        posts.map((item)=>(
          <ul key={item._id}>
            <li>{item.name}</li>
          </ul>
        ))
      }
    </div>
  )
}
