'use client'
import Link from 'next/link'
import React from 'react'

export default function CategoryButton({item}) {
  console.log(item);
  
  return (
    <div >
        <Link  href={`/category/${item._id}`}>
         <button className="px-4 py-2 font-bold hover:scale-110 ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 font-poppins border rounded-lg!">
                {item.name}
              </button>
              </Link>
    </div>
  )
}
