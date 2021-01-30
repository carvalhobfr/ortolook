import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendaLateralDir from '../AgendaLateralDir'

const Tratamentos = () => {
  const [imgUrl, setImgUrl] = useState('/images/harmonizacaoFacial.png')
  const [imgUrlMobile, setImgUrlMobile] = useState(
    '/images/harmonizacaoFacialMobile.png'
  )
  return (
    <Contentor id="tratamentos">
      <Container className="ortolookContainer">
        <Row className="linhaSinuosaTratamentos linhaSinuosa linhaSinuosaEsq ">
          <br></br>
        </Row>
        <div id="skinbooster"></div>
        <div id="toxinabotulinica"></div>
        <div id="preenchimento"></div>

        <Row className="rowBtnTratamentos someMobile">
          <Col>
            <button onClick={() => setImgUrl('images/tratamento2.png')}>
              <img
                loading="lazy"
                src="images/skinbooster.png"
                alt="Preenchimento"
              />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento3.png')}>
              <img
                loading="lazy"
                src="images/botulinica.png"
                alt="Toxina Botulinica"
              />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento4.png')}>
              <img
                loading="lazy"
                src="images/preenchimento.png"
                alt="Skin Booster"
              />
            </button>
          </Col>
        </Row>
        <Row className="rowBtnTratamentos openMobile">
          <Col>
            <button
              onClick={() => setImgUrlMobile('images/preenchimentoMobile.png')}
            >
              <img
                loading="lazy"
                src="images/preenchimento.png"
                alt="Preenchimento"
              />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrlMobile('images/botoxMobile.png')}>
              <img
                loading="lazy"
                src="images/botulinica.png"
                alt="Toxina Botulinica"
              />
            </button>
          </Col>
          <Col>
            <button
              onClick={() => setImgUrlMobile('images/skinboosterMobile.png')}
            >
              <img
                loading="lazy"
                src="images/skinbooster.png"
                alt="Skin Booster"
              />
            </button>
          </Col>
        </Row>
        <Row className="mainRow">
          <img
            loading="lazy"
            src={imgUrl}
            className="imgTratamento someMobile "
            alt="Tratamento SkinBooster"
          />
          <img
            loading="lazy"
            src={imgUrlMobile}
            className="imgTratamento openMobile"
            alt="Tratamento SkinBooster"
          />
        </Row>
        <AgendaLateralDir />
      </Container>
    </Contentor>
  )
}

export default Tratamentos
