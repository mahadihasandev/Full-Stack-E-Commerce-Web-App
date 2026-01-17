import CategoryButton from '@/components/CategoryButton';
import React from 'react'
import { Container } from 'react-bootstrap'

export default async function CategoryComponent() {
    const data=await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/product/viewcategory`)
    const posts=await data.json()
    
    
  return (
    <div>
       <Container className='px-2 sm:px-3'>
      <div className="bg-[#F8F9FA] py-2 px-2 sm:px-3">
       <ul  className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 m-0 p-0 list-none flex-wrap">
        
          {posts.map((item) => (
            
            <li key={item._id} className="relative group">
             <CategoryButton item={item}/> 
             <ul  className="absolute hidden group-hover:block z-50 -left-8 whitespace-nowrap">
             { item.subcategoryList.map(items=>(
                      
                      <li key={items._id} className='border cursor-pointer font-poppins ease-in-out duration-300 bg-gray-50 py-1 px-3 sm:px-10 text-xs sm:text-sm hover:bg-orange-600 hover:text-white hover:scale-110 '>{items.name}</li>
                     
                     ))}
                    
                </ul> 
              
            </li>
            
          ))}
           </ul>
       
      </div>
    </Container>
    </div>
  )
}
