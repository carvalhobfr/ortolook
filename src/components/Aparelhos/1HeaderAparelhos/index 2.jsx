import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const HeaderAparelhos = props => {
  const pixelEvent = () => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.trackCustom('Agende_Apa')
      })
  }

  return (
    <Contentor>
      <Container>
        <Row className="rowMain">
          <Col className="coluna3">
            <button className="agendeAqui" onClick={pixelEvent}>
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
              className="fotoHeader someMobile"
              src="/images/fotoAparelhoHeader.png"
              alt="Aparelhos Agende"
            />
            <img
              loading="lazy"
              className="fotoHeader openMobile"
              src="/images/fotoAparelhoHeader2.png"
              alt="Aparelhos Agende"
            />
            <Row className="redesSociais openMobile ">
              <a href="https://www.instagram.com/ortolook.aparelho/">
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
                <a href="https://www.instagram.com/ortolook.aparelho/">
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
          <Col className="coluna3 coluna32">
            <img
              src="/images/facilHeaderAP.png"
              alt="header facil"
              className="headerFacil"
            />
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
