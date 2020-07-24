import styled from 'styled-components'

export const BarraNavegacao = styled.div`
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

  .NavLink{
    padding-left: 7px;
    padding-right: 7px;
    line-height: 16px;
    float: left;
    font-size: 14px;
    color: #b8b6b4;
    text-transform: uppercase;
    font-family: "Motiva Sans", Sans-serif;
  }

  .navbar-dark .navbar-nav .nav-link{
    color: #b8b6b4;
  }

  .navbar-dark .navbar-nav .nav-link:hover{
    color: #ffffff;
  }

  .iniciasessao{
    font-size: 11px;
    font-family: "Motiva Sans", Sans-serif;
  }

`

export const Imagem = styled.img`
  width: 176px;
  height: 44px;
  border-radius 20px;
`
