import React from 'react'
import { Container } from 'react-bootstrap'

function ProductHeader() {
  return (
    <div>
        <Container>
            <div className='bg-orange-500/75 mt-2 md:mt-0 backdrop-blur-2xl text-white h-15 md:h-20 w-full px-4 rounded-md py-3 md:py-4'>
                <h2 className='font-poppins'>Our Product</h2>
            </div>
        </Container>
    </div>
  )
}

export default ProductHeader