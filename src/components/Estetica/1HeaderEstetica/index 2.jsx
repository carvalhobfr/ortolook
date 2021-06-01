import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendaLateralEsq from '../AgendaLateralEsq'

const HeaderEstetica = () => {
  const [imgUrl, setImgUrl] = useState('/images/faltaBrilho.png')

  return (
    <Contentor>
      <Container className="someMobile">
        <Row className="rowMain">
          <Col className="coluna1">
            <AgendaLateralEsq />
            <button onClick={() => setImgUrl('images/faltaBrilho.png')}>
              <p>FALTA DE BRILHO</p>
            </button>
            <button onClick={() => setImgUrl('images/peDeGalinha.png')}>
              <p>PÉ DE GALINHA</p>
            </button>
            <button onClick={() => setImgUrl('images/malar.png')}>
              <p>MALAR</p>
            </button>
            <button onClick={() => setImgUrl('images/bigodeChines.png')}>
              <p>BIGODE CHINÊS</p>
            </button>
            <button onClick={() => setImgUrl('images/labiosFinos.png')}>
              <p>LÁBIOS FINOS </p>
            </button>
          </Col>
          <Col className="imgCentral">
            <a href="#tratamentos">
              <img
                loading="lazy"
                src={imgUrl}
                alt="Tratamento Específico"
                className="imagemEstetica"
              />
            </a>
          </Col>
          <Col className="coluna3">
            <img
              loading="lazy"
              src="/images/upgrade.png"
              alt="Vamos dar um Upgrade"
            />
            <div className="someMobile">
              <button onClick={() => setImgUrl('images/rugas1.png')}>
                <p>RUGAS</p>
              </button>
              <button onClick={() => setImgUrl('images/olheira1.png')}>
                <p>OLHEIRA</p>
              </button>
              <button onClick={() => setImgUrl('images/pontoDoNariz.png')}>
                <p>PONTA DO NARIZ</p>
              </button>
              <button onClick={() => setImgUrl('images/sorrisoGengival.png')}>
                <p>SORRISO GENGIVAL</p>
              </button>
              <button onClick={() => setImgUrl('images/marionete.png')}>
                <p>MARIONETE</p>
              </button>
              <button onClick={() => setImgUrl('images/bruxismo.png')}>
                <p>BRUXISMO</p>
              </button>
            </div>
          </Col>
        </Row>

        <Row className="rowRedeSociais">
          <Col className="redesSociais someMobile">
            <img
              loading="lazy"
              className="instagram"
              src="/images/instagram.png"
              alt="Instagram"
            />
            <img loading="lazy" src="/images/facebook.png" alt="Facebook" />
          </Col>
          <Col className="text-right colunaLogo">
            <img
              loading="lazy"
              src="/images/ortolookLogoHead.png"
              alt="Ortolook"
            />
          </Col>
        </Row>
      </Container>

      <Container className="openMobile pageMobile">
        <Row className="rowUpgrade">
          <img src="/images/upgradeMobile.png" alt="upgrade" />
        </Row>
        <Row>
          <Col>
            <img src="/images/headHeader.png" alt="upgrade" />
          </Col>
          <Col className="colTratamentos">
            <p>RUGAS</p>
            <p>OLHEIRAS</p>
            <p>MANDÍBULA</p>
            <p>LÁBIOS FINOS</p>
            <p>BIGODE CHINÊS</p>
            <p>FALTA DE BRILHO</p>
          </Col>
          <Row>
            <Col className="linkTratamentos">
              <a href="#tratamentos">
                <img src="/images/tratamentos237.png" alt="upgrade" />
                <img src="/images/tratamentos135.png" alt="upgrade" />
                <img src="/images/tratamentos134.png" alt="upgrade" />
              </a>
            </Col>
            <Col className="linkTratamentos2">
              <a href="https://www.facebook.com/Ortolook/">
                <img
                  className="sociais"
                  src="/images/facebook.png"
                  alt="upgrade"
                />
              </a>
              <a href="https://www.instagram.com/ortolook.aparelho/">
                <img
                  className="sociais"
                  src="/images/instagram.png"
                  alt="upgrade"
                />
              </a>
              <button className="agendeAqui">
                <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
                  <img
                    className="semMarginDir"
                    src="/images/agende238.png"
                    alt="upgrade"
                  />
                </a>
              </button>
            </Col>
          </Row>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderEstetica
