import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { BarraNavegacao, Imagem } from './css'
import logo from './globalheader_logo.png'

function NavBar (props) {
  return (
    <BarraNavegacao>
      <Navbar className='navbarra' sticky='top' collapseOnSelect expand='lg' variant='dark'>
        <Navbar.Brand href='/'>
          <Imagem alt='Logo da Steam' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown
              className='NavLink'
              title='Loja'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item clasName='itemMenu' href='#action/3.1'>
                INÍCIO
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                LISTA DE DESCOBRIMENTOS
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                LISTA DE DESEJOS
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                LOJA DE PONTOS
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>NOTÍCIAS</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                ESTATÍSTICAS
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='NavLink'
              title='Comunidade'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>
                PÁGINA INICIAL
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Discussões</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Oficina</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Mercado</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Transmissões
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                ESTATÍSTICAS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='NavLink' href='#pricing'>
              Sobre
            </Nav.Link>
            <Nav.Link className='NavLink' href='#pricing'>
              Suporte
            </Nav.Link>
            <NavDropdown
              className='NavLink'
              title='Administrador'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Categorias</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Jogos</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Produtoras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='iniciasessao' href='/iniciarsessao'>
              iniciar sessão
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </BarraNavegacao>
  )
}

export default NavBar
