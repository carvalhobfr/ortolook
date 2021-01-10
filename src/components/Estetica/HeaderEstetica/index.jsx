import React, { useState } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const HeaderEstetica = () => {
  const [imgUrl, setImgUrl] = useState('/images/faltaBrilho.png')

  return (
    <Contentor>
      <Container>
        <Row className="rowMain">
          <Col className="coluna1">
            <Col className="agendeAqui">
              <Link href="/">
                <img src="/images/agendeAqui.png" alt="Agende aqui" />
              </Link>
              <Link href="/">
                <img src="/images/saibaPrecos.png" alt="Saiba Precos" />
              </Link>
            </Col>
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
          <Col>
            <img
              src={imgUrl}
              alt="Tratamento Específico"
              className="imagemEstetica"
            />
          </Col>
          <Col className="coluna3">
            <h2>
              <strong>
                {' '}
                vamos dar um <br /> upgrade?
                <br />
              </strong>
            </h2>
            <button onClick={() => setImgUrl('images/rugas.png')}>
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
          <Col xs="10" className="text-right">
            <img src="/images/ortolookLogoHead.png" alt="Ortolook" />
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default HeaderEstetica
