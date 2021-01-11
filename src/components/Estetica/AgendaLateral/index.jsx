import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'

const agendeLateral = () => {
  return (
    <Col className="saibaNossosPrecos">
      {/* <a href="">
        <img src="/images/saibaNossosPrecos.png" alt="Saiba Nossos Preços" />
      </a> */}
      <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
        <img src="/images/agendeAquiSmall.png" alt="Agende Aqui" />
      </a>
    </Col>
  )
}

export default agendeLateral
