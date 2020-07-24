import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { BarraNavegacao,Imagem } from './css'
import logo from './globalheader_logo.png'

function NavBar (props) {
  return (
    <BarraNavegacao>
      <Navbar className='navbarra' collapseOnSelect expand='lg' variant='dark'>
        <Navbar.Brand href='#home'>
          <Imagem alt='Logo da Steam' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='NavLink' href='#features'>Loja</Nav.Link>
            <Nav.Link className='NavLink' href='#pricing'>Comunidade</Nav.Link>
            <Nav.Link className='NavLink' href='#pricing'>Sobre</Nav.Link>
            <Nav.Link className='NavLink' href='#pricing'>Suporte</Nav.Link>
            <NavDropdown className='NavLink'  title='Administrador' id='collasible-nav-dropdown'>
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
            <Nav.Link className='iniciasessao' href='#deets'>iniciar sessão</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </BarraNavegacao>
  )
}

export default NavBar
