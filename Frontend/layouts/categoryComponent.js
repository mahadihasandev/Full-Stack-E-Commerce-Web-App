import CategoryButton from '@/components/CategoryButton';
import { ul } from 'motion/react-client';
import React from 'react'
import { Container } from 'react-bootstrap'

export default async function CategoryComponent() {
    const data=await fetch(`${process.env.LOCAL_API}/api/v1/product/viewcategory`)
    const posts=await data.json()
    
    
  return (
    <div>
       <Container>
      <div className="bg-[#F8F9FA] py-2">
       <ul  className="flex justify-center items-center gap-6 m-0 p-0 list-none">
        
          {posts.map((item) => (
            
            <li key={item._id} className="relative group">
             <CategoryButton item={item}/> 
             <ul  className="absolute hidden group-hover:block z-50 -left-8 mt-1">
             { item.subcategoryList.map(items=>(
                      
                      <li key={items._id} className='border font-poppins ease-in-out duration-300 bg-gray-50 py-1 px-10 hover:bg-orange-600 hover:text-white hover:scale-110 '>{items.name}</li>
                     
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
