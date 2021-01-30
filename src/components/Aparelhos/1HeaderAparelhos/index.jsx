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
                <img
                  loading="lazy"
                  src="/images/agendeAparelhos.png"
                  alt="Aparelhos Agende"
                />
              </a>
            </button>
            <img
              loading="lazy"
              className="fotoHeader"
              src="/images/fotoAparelhoHeader.png"
              alt="Aparelhos Agende"
            />
            <Row className="redesSociais openMobile ">
              <a href="https://www.instagram.com/ortolook/">
                <img
                  loading="lazy"
                  src="/images/instagram.png"
                  alt="Instagram"
                />
              </a>
              <br />
              <a href="https://www.facebook.com/Ortolook/">
                <img
                  loading="lazy"
                  src="/images/facebook2.png"
                  alt="Facebook"
                />
              </a>
            </Row>
            <Row className="rowRedeSociais someMobile">
              <Col xs="2" className="redesSociais">
                <a href="https://www.instagram.com/ortolook/">
                  <img
                    loading="lazy"
                    className="instagram"
                    src="/images/instagram.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.facebook.com/Ortolook/">
                  <img
                    loading="lazy"
                    src="/images/facebook2.png"
                    alt="Facebook"
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="coluna3 coluna32 ">
            <h2>
              <strong>
                é fácil <br />
                é prático
                <br /> é transformador
                <br />
              </strong>
            </h2>
            <img
              loading="lazy"
              className="fotoHeader2 someMobile"
              src="/images/ortoHeadLogo.png"
              alt="Falta de Brilho"
            />
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderAparelhos
