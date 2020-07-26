import styled from 'styled-components'

export const BarraNavegacao = styled.header`
  background-color: #171a21;
  padding: 0px;

  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .navbarra {
    width: 940px;
    height: 104px;
  }

  .NavLink {
    line-height: 16px;
    float: left;
    font-size: 14px;
    color: #b8b6b4;
    text-transform: uppercase;
    font-family: 'Motiva Sans', Sans-serif;
  }

   .navbar-dark .navbar-nav .nav-link {
    color: #b8b6b4;
  }

  .navbar-dark .navbar-nav .nav-link:hover {
    color: #ffffff;
  }

  .iniciasessao {
    font-size: 11px;
    font-family: 'Motiva Sans', Sans-serif;
  }

  .dropdown-menu {
    background-color: #171a21;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 11px;
    color: #b8b6b4;
    padding-right: 10px;
  }

  .dropdown-item {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 11px;
    color: #b8b6b4;
    padding-right: 10px;
  }

  .dropdown-toggle:after {
    display: none;
  }
`
export const Imagem = styled.img`
  width: 176px;
  height: 44px;
  border-radius 20px;
`
