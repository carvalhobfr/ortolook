import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'

const agendeLateralEsq = () => {
  const pixelEvent = () => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.trackCustom('Agende_Est')
      })
  }
  return (
    <Col className="agendeAqui agendeAquiDireita semMarginDir">
      {/*       <Link href="http://grupodentotal-rdsm-site.rds.land/estetica-saiba-nossos-precos">
        <img
          className=" saibaPrecos semMarginDir"
          loading="lazy"
          src="/images/saibaPrecosDir.png"
          alt="Agende aqui"
        />
      </Link> */}
      <button className="agendeAqui " onClick={pixelEvent}>
        <a href="https://signupforservices.com/whatsapp/optin/?bId=445c2d7e-600d-4dfe-a133-a0955a37714b&bName=ortolook&s=URL&lang=pt_BR">
          <img
            className="agendeAqui saibaPrecosDir semMarginDir agendeAquiEs"
            loading="lazy"
            src="/images/agendeAquiDir.png"
            alt="Agende aqui"
          />
        </a>
      </button>
      {/* <ModalExample
                srcImg="/images/agendeAqui2.png"
                className="agendeAqui"
              /> */}
    </Col>
  )
}

export default agendeLateralEsq
