import React, { useEffect } from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'
/* import ReactPixel from 'react-facebook-pixel'
 */
const agendeLateralDir = () => {
  const pixelEvent = () => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.trackCustom('Agende_Apa')
      })
  }

  return (
    <Col className="agendeAqui agendeAquiDireita semMarginDir">
      <button
        className="agendeAqui saibaPrecosDir semMarginDir"
        onClick={pixelEvent}
      >
        <a href="https://signupforservices.com/whatsapp/optin/?bId=445c2d7e-600d-4dfe-a133-a0955a37714b&bName=ortolook&s=URL&lang=pt_BR">
          <img
            className="agendeAqui saibaPrecosDir semMarginDir"
            loading="lazy"
            src="/images/agendeAquiDirAP.png"
            alt="Agende aqui"
          />
        </a>
      </button>
      {/*  <Link href="http://grupodentotal-rdsm-site.rds.land/aparelho-saiba-nossos-precos">
        <img
          className="agendeAqui saibaPrecos semMarginDir"
          loading="lazy"
          src="/images/saibaPrecosDirAP.png"
          alt="Agende aqui"
        />
      </Link> */}

      {/* <ModalExample
                srcImg="/images/agendeAqui2.png"
                className="agendeAqui"
              /> */}
    </Col>
  )
}

export default agendeLateralDir
