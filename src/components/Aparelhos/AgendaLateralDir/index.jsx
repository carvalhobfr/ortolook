import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'

const agendeLateralDir = () => {
  return (
    <Col className="agendeAqui agendeAquiDireita semMarginDir">
      <button className="agendeAqui saibaPrecosDir semMarginDir">
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
