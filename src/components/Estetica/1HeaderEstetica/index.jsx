import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import ModalExample from '../../ModalForm'

const HeaderEstetica = () => {
  const [imgUrl, setImgUrl] = useState('/images/faltaBrilho.png')

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js'
    script.async = true
    document.body.appendChild(script)
  })

  return (
    <Contentor>
      <Container>
        <Row className="rowMain">
          <Col className="coluna1">
            <Col className="agendeAqui someMobile">
              <Link href="https://wa.me/5521972878038">
                <img
                  loading="lazy"
                  src="/images/agendeAqui2.png"
                  alt="Agende aqui"
                />
              </Link>
              <ModalExample
                srcImg="/images/agendeAqui2.png"
                className="agendeAqui"
              />
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
      <Col className="agendeAqui openMobile">
        <br />
        <Link href="https://wa.me/5521972878038">
          <img loading="lazy" src="/images/agendeAqui.png" alt="Agende aqui" />
        </Link>
        {/* <Link href="/">
                 <img loading="lazy" src="/images/saibaPrecos.png" alt="Saiba Precos" />
              </Link> */}
      </Col>
    </Contentor>
  )
}

export default HeaderEstetica
