'use client'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { poppins } from '@/lib/fonts/fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { headerData } from '@/constant/data';
import Image from 'next/image';
import logo from '../assets/logo.png'
import { ShoppingCart } from 'lucide-react';

function NavbarMenu() {
  const pathname=usePathname()
 
  

  return (
    
    <div className='sticky top-0 z-50 '>

    <Navbar expand="md" className="bg-body-tertiary border-b border-orange-200 bg-white/60! backdrop-blur-md">
      <Container className='px-2 sm:px-3'>
        <Navbar.Brand className='z-10' href="/"><Image className='' height={60} width={60} src={logo} alt='image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-2 md:gap-3 z-50"> 
          <div className='flex flex-col md:flex-row items-center capitalize z-10 font-semibold gap-5 md:gap-7'>
        {headerData.map((item)=>(
            <Link key={item.title} href={item?.href}
            className={`hover:text-white! text-gray-600! no-underline! text-sm md:text-lg hoverEffect relative group z-10 transition-colors duration-300 isolate ${pathname==item?.href&&'text-white!'}`}
            >
            {item.title}
            <span className={`absolute inset-0 -z-10 bg-orange-600 -left-[25%] -top-[3%] rounded-2xl w-[150%] h-[120%] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${pathname==item?.href&&"scale-100"}`}/>
            </Link>
        ))}
    </div>
         
          </Nav>
          <div className='flex items-center gap-2 md:gap-3'>
            <Link href='/cart'>
            <ShoppingCart className='text-orange-600 hover:scale-110 w-5 h-5 md:w-6 md:h-6'/>
            </Link>
          <Button className='bg-orange-500! hover:bg-orange-600! py-1 text-xs md:text-sm'><Nav.Link className={`${poppins.className} `} href="/">Login</Nav.Link></Button>
          </div>
        </Navbar.Collapse>
        
         
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarMenu