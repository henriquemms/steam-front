import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TextInput from '../TextInput'
import BotaoSteam from '../BotaoSteam'
import { IniSessao, Tit1, Paragrafo } from './css'

function IniciarSessao (props) {
  return (
    <IniSessao>
      <Container className='TamContainer'>
        <Row className='FundoSteam2'>
          <Col md={12}>
            <Row>
              <Col md={6}>
                <Tit1>INICIAR SESSÃO</Tit1>
                <Paragrafo>com uma conta Steam existente</Paragrafo>
                <br />
                <TextInput label='Nome de usuário Steam' />
                <TextInput label='Senha' />
              </Col>

              <Col md={6} className='Traco'>
                <Tit1>Criar</Tit1>
                <Paragrafo>uma nova conta gratuita</Paragrafo>
                <br />
                <Paragrafo>
                  O cadastro é gratuito e o programa é fácil de usar. Continue
                  para criar a sua conta Steam e baixar o Steam, a melhor
                  solução digital para jogos e softwares para PC, Mac e Linux.
                </Paragrafo>
              </Col>
            </Row>
            <Row>
              <Col className='FormatBtn' md={6}>
                <BotaoSteam texto='Iniciar sessão' />
              </Col>
              <Col className='FormatBtn' md={6}>
                <BotaoSteam texto='Cadastrar-se' />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <Link className='Link' to='#vaipraonde'>Esqueceu a sua senha?</Link>
      </Container>
    </IniSessao>
  )
}

export default IniciarSessao
