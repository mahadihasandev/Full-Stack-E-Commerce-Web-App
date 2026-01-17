'use client'
import { b } from 'motion/react-client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  const [bannerData,setBannerData]=useState([])
  useEffect(()=>{
    async function BannerData() {
      try {
        let data=await fetch('http://localhost:8000/api/v1/product/viewbanner')
      const bannerData=await data.json()
      setBannerData(bannerData);
      } catch (error) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
   
    }
    BannerData()
  },[])
    

  return (
    
      <Container className='px-2 sm:px-3'>
        <Carousel>
          {bannerData.map((item) => (
            <Carousel.Item className='' key={item._id }> 
              <Image                
                src={`${item.image}`} 
                height={400} 
                width={1200} 
                alt={item.title || "banner image"}
                className="d-block w-100"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                unoptimized={true}
                priority
              />
              <Carousel.Caption>
                <h3 className='text-black text-sm sm:text-xl md:text-2xl'>{item.title}</h3>
                <p className='text-black text-xs sm:text-sm md:text-base'>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    
  )
}

export default Banner