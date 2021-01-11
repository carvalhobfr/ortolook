import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendeLateral from '../AgendaLateral'

const Tratamentos = () => {
  const [imgUrl, setImgUrl] = useState('/images/harmonizacaoFacial.png')
  const [imgUrlMobile, setImgUrlMobile] = useState(
    '/images/harmonizacaoFacialMobile.png'
  )
  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row className="linhaSinuosaTratamentos">
          <br></br>
        </Row>
        <Row className="rowBtnTratamentos someMobile">
          <Col>
            <button onClick={() => setImgUrl('images/tratamento2.png')}>
              <img src="images/skinbooster.png" alt="Preenchimento" />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento3.png')}>
              <img src="images/botulinica.png" alt="Toxina Botulinica" />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento4.png')}>
              <img src="images/preenchimento.png" alt="Skin Booster" />
            </button>
          </Col>
        </Row>
        <Row className="rowBtnTratamentos openMobile">
          <Col>
            <button
              onClick={() => setImgUrlMobile('images/preenchimentoMobile.png')}
            >
              <img src="images/preenchimento.png" alt="Preenchimento" />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrlMobile('images/botoxMobile.png')}>
              <img src="images/botulinica.png" alt="Toxina Botulinica" />
            </button>
          </Col>
          <Col>
            <button
              onClick={() => setImgUrlMobile('images/skinboosterMobile.png')}
            >
              <img src="images/skinbooster.png" alt="Skin Booster" />
            </button>
          </Col>
        </Row>
        <Row>
          <img
            src={imgUrl}
            className="imgTratamento someMobile "
            alt="Tratamento SkinBooster"
          />
          <img
            src={imgUrlMobile}
            className="imgTratamento openMobile"
            alt="Tratamento SkinBooster"
          />
        </Row>
      </Container>
      <AgendeLateral />
    </Contentor>
  )
}

export default Tratamentos
