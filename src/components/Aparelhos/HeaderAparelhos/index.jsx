import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const HeaderAparelhos = props => {
  return (
    <Contentor>
      <Container>
        <Row className="rowMain">
          <Col className="coluna3">
            <button className="agendeAqui">
              <img src="/images/agendeAparelhos.png" alt="Aparelhos Agende" />
            </button>
            <img
              className="fotoHeader"
              src="/images/fotoAparelhoHeader.png"
              alt="Aparelhos Agende"
            />
          </Col>
          {/* <AgendeLateral /> */}
          <Col className="coluna3">
            <h2>
              <strong>
                é fÁcil <br />
                é prático
                <br /> é transformador
                <br />
              </strong>
            </h2>
            <br />
            <br />
            <img
              className="fotoHeader2"
              src="/images/ortoHeadLogo.png"
              alt="Falta de Brilho"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="rowRedeSociais">
          <Col xs="2" className="redesSociais">
            <img
              className="instagram"
              src="/images/instagram.png"
              alt="Instagram"
            />
            <br />
            <img src="/images/facebook.png" alt="Facebook" />
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderAparelhos
