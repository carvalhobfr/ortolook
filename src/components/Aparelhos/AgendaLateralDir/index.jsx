import React, { useEffect } from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'
/* import ReactPixel from 'react-facebook-pixel'
 */
const agendeLateralDir = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.init('276341384153524')
      })
  }, [])

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
        <Link href="https://wa.me/5521972878038">
          <img
            className="agendeAqui saibaPrecosDir semMarginDir"
            loading="lazy"
            src="/images/agendeAquiDirAP.png"
            alt="Agende aqui"
          />
        </Link>
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
