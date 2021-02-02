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
              <img src="/images/faltaBrilhoLink.png" alt="imageTratamento" />
            </button>
            <button onClick={() => setImgUrl('images/peDeGalinha.png')}>
              <img src="/images/peDeGalinhaLink.png" alt="imageTratamento" />
            </button>
            <button onClick={() => setImgUrl('images/malar.png')}>
              <img src="/images/malarLink.png" alt="imageTratamento" />
            </button>
            <button onClick={() => setImgUrl('images/bigodeChines.png')}>
              <img src="/images/bigodeLink.png" alt="imageTratamento" />
            </button>
            <button onClick={() => setImgUrl('images/labiosFinos.png')}>
              <img src="/images/labiosLink.png" alt="imageTratamento" />
            </button>
          </Col>
          <Col className="imgCentral">
            <img
              loading="lazy"
              src={imgUrl}
              alt="Tratamento Específico"
              className="imagemEstetica"
            />
          </Col>
          <Col className="coluna3">
            <img
              loading="lazy"
              src="/images/upgrade.png"
              alt="Vamos dar um Upgrade"
            />
            <div className="someMobile">
              <button onClick={() => setImgUrl('images/rugas1.png')}>
                <img src="/images/rugasLink.png" alt="imageTratamento" />
              </button>
              <button onClick={() => setImgUrl('images/olheira1.png')}>
                <img src="/images/olheiraLink.png" alt="imageTratamento" />
              </button>
              <button onClick={() => setImgUrl('images/pontoDoNariz.png')}>
                <img src="/images/pontaLink.png" alt="imageTratamento" />
              </button>
              <button onClick={() => setImgUrl('images/sorrisoGengival.png')}>
                <img src="/images/sorrisoLink.png" alt="imageTratamento" />
              </button>
              <button onClick={() => setImgUrl('images/marionete.png')}>
                <img src="/images/marioneteLink.png" alt="imageTratamento" />
              </button>
              <button onClick={() => setImgUrl('images/bruxismo.png')}>
                <img src="/images/bruxismoLink.png" alt="imageTratamento" />
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
              <a href="https://www.instagram.com/ortolook.aparelho/">
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
              <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
                <img
                  className="semMarginDir"
                  src="/images/agende238.png"
                  alt="upgrade"
                />
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderEstetica
