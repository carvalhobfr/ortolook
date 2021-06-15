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
    <Col className="agendeAqui someMobile">
      <button className="agendeAqui" onClick={pixelEvent}>
        <Link href="https://signupforservices.com/whatsapp/optin/?bId=445c2d7e-600d-4dfe-a133-a0955a37714b&bName=ortolook&s=URL&lang=pt_BR">
          <img
            className="agendeAqui "
            loading="lazy"
            src="/images/agendeAqui2.png"
            alt="Agende aqui"
          />
        </Link>
      </button>
      {/*  <Link href="https://wa.me/5521972878038">
        <img
          className="saibaPrecos saibaPrecosEsq"
          loading="lazy"
          src="/images/saibaPrecos.png"
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

export default agendeLateralEsq
