'use client'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { poppins } from '@/lib/fonts/fonts';

function NavbarMenu() {

  return (
    
    <div>

    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3 z-50"> 
            <Nav.Link className={`${poppins.className} nav-links`} href="/">Home</Nav.Link>
            <Nav.Link className={`${poppins.className} nav-links`} href="/">Link</Nav.Link>
            <Nav.Link className={`${poppins.className} nav-links`} href="/">Link</Nav.Link>
            <NavDropdown className={`${poppins.className} nav-links`} title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item className={`${poppins.className} nav-links`} href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className={`${poppins.className} nav-links`} href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className={`${poppins.className} nav-links`} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={`${poppins.className} nav-links`} href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`${poppins.className} nav-links`} href="#link">Contact</Nav.Link>
         
          </Nav>
          <Button><Nav.Link className={`${poppins.className}`} href="/">Login</Nav.Link></Button>
        </Navbar.Collapse>
        
         
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarMenu