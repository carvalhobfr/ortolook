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
              <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
                <img src="/images/agendeAparelhos.png" alt="Aparelhos Agende" />
              </a>
            </button>
            <img
              className="fotoHeader"
              src="/images/fotoAparelhoHeader.png"
              alt="Aparelhos Agende"
            />
          </Col>
          <Col className="coluna3">
            <h2>
              <strong>
                é fácil <br />
                é prático
                <br /> é transformador
                <br />
              </strong>
            </h2>
            <img
              className="fotoHeader2 someMobile"
              src="/images/ortoHeadLogo.png"
              alt="Falta de Brilho"
            />
          </Col>
        </Row>
        <Row className="redesSociais openMobile ">
          <a href="https://www.instagram.com/ortolook/">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <br />
          <a href="https://www.facebook.com/Ortolook/">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
        </Row>
        <Row className="rowRedeSociais someMobile">
          <Col xs="2" className="redesSociais">
            <a href="https://www.instagram.com/ortolook/">
              <img
                className="instagram"
                src="/images/instagram.png"
                alt="Instagram"
              />
            </a>
            <br />
            <a href="https://www.facebook.com/Ortolook/">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderAparelhos
