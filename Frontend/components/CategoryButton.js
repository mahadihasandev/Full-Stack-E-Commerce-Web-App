'use client'
import Link from 'next/link'
import React from 'react'

export default function CategoryButton({item}) {
  
  
  return (
    <div >
        <Link  href={`/category/${item._id}`}>
         <button className="px-4 py-2 font-bold hover:scale-110 text-gray-600 border-2 border-orange-500 hover:text-orange-600 ease-in-out duration-300 bg-gray-100 font-poppins rounded-lg!">
                {item.name}
              </button>
              </Link>
    </div>
  )
}
