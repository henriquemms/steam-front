import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import logo from './globalheader_logo.png'

function NavBar (props) {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img alt='Logo da Steam' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#features'>Loja</Nav.Link>
            <Nav.Link href='#pricing'>Comunidade</Nav.Link>
            <Nav.Link href='#pricing'>Sobre</Nav.Link>
            <Nav.Link href='#pricing'>Suporte</Nav.Link>
            <NavDropdown title='Administrador' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
