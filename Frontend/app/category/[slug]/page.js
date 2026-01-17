
import React from 'react'

export default async function Category({params}) {
  let slug=await params
   const data=await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/viewallsubcategory?slug=${slug.slug}`)
    const posts=await data.json()
   
  
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
