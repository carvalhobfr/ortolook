import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const Tratamentos = () => {
  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row>
          <h1>Tratamentos</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <a href="">
              <img src="images/preenchimento.png" alt="Preenchimento" />
            </a>
          </Col>
          <Col>
            <a href="">
              <img src="images/botulinica.png" alt="Toxina Botulinica" />
            </a>
          </Col>
          <Col>
            <a href="">
              <img src="images/skinbooster.png" alt="Skin Booster" />
            </a>
          </Col>
        </Row>
        <Row>
          <img
            src="images/harmonizacaoFacial.png"
            alt="Tratamento SkinBooster"
          />
        </Row>
      </Container>
      <Col className="saibaNossosPrecos">
        <a href="">
          <img src="/images/saibaNossosPrecos.png" alt="Saiba Nossos Preços" />
        </a>
        <a href="">
          <img src="/images/agendeAquiSmall.png" alt="Agende Aqui" />
        </a>
      </Col>
    </Contentor>
  )
}

export default Tratamentos
