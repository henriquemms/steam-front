import styled from 'styled-components'

export const Campo = styled.div`
  .btn-steam {
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    font-family: 'Motiva Sans', Sans-serif;
    font-weight: normal;

    border-radius: 2px;
    border: none;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: #67c1f5;
    background: rgba(103, 193, 245, 0.2);
  }
  .btn-steam:hover {
    text-decoration: none;
    color: #fff;
    background: #417a9b;
  }

  .btn-steam:active {
    text-decoration: none !important;
    color: #fff !important;
    background: #417a9b !important;
    box-shadow: none;
  }

  .btn-steam:focus {
    box-shadow: none;
  }
`
