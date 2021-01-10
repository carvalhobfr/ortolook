import React, { useState } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendeLateral from '../AgendaLateral'

const Tratamentos = () => {
  const [imgUrl, setImgUrl] = useState('/images/harmonizacaoFacial.png')
  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row className="linhaSinuosaTratamentos">
          <br></br>
        </Row>
        <Row className="rowBtnTratamentos">
          <Col>
            <button onClick={() => setImgUrl('images/tratamento2.png')}>
              <img src="images/preenchimento.png" alt="Preenchimento" />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento3.png')}>
              <img src="images/botulinica.png" alt="Toxina Botulinica" />
            </button>
          </Col>
          <Col>
            <button onClick={() => setImgUrl('images/tratamento4.png')}>
              <img src="images/skinbooster.png" alt="Skin Booster" />
            </button>
          </Col>
        </Row>
        <Row>
          <img src={imgUrl} alt="Tratamento SkinBooster" />
        </Row>
      </Container>
      <AgendeLateral />
    </Contentor>
  )
}

export default Tratamentos
