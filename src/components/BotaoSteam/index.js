import React from 'react'

import { Button } from 'react-bootstrap'
import { Campo } from './css'

function BotaoSteam (props) {
  return (
    <Campo>
      <Button className='btn-steam' onClick={props.onClick}>{props.texto}</Button>
    </Campo>
  )
}

export default BotaoSteam
