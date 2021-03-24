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
      <button className="agendeAqui" onClick={pixelEvent}>
        <Link href="https://wa.me/5521972878038">
          <img
            className="agendeAqui saibaPrecosDir semMarginDir"
            loading="lazy"
            src="/images/agendeAquiDir.png"
            alt="Agende aqui"
          />
        </Link>
      </button>
      {/* <ModalExample
                srcImg="/images/agendeAqui2.png"
                className="agendeAqui"
              /> */}
    </Col>
  )
}

export default agendeLateralEsq
