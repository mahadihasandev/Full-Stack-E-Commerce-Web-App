'use client'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { poppins } from '@/lib/fonts/fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { headerData } from '@/constant/data';
import Image from 'next/image';
import logo from '../assets/logo.png'

function NavbarMenu() {
  const pathname=usePathname()
 
  

  return (
    
    <div>

    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="/"><Image height={60} width={60} src={logo} alt='image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3 z-50"> 
          <div className='flex flex-col md:flex-row items-center capitalize z-10 font-semibold gap-7'>
        {headerData.map((item)=>(
            <Link key={item.title} href={item?.href}
            className={`hover:text-white! text-gray-600! no-underline! text-lg hoverEffect relative group z-10 transition-colors duration-300 isolate ${pathname==item?.href&&'text-white!'}`}
            >
            {item.title}
            <span className={`absolute inset-0 -z-10 bg-orange-600 -left-[25%] -top-[3%] rounded-2xl w-[150%] h-[120%] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${pathname==item?.href&&"scale-100"}`}/>
            </Link>
        ))}
    </div>
         
          </Nav>
          <Button className='bg-orange-500! hover:bg-orange-600!'><Nav.Link className={`${poppins.className} `} href="/">Login</Nav.Link></Button>
        </Navbar.Collapse>
        
         
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarMenu