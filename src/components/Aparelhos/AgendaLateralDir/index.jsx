import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'

const agendeLateralDir = () => {
  return (
    <Col className="agendeAqui agendeAquiDireita semMarginDir">
      <Link href="http://grupodentotal-rdsm-site.rds.land/estetica-saiba-nossos-precos">
        <img
          className=" saibaPrecos semMarginEsq"
          loading="lazy"
          src="/images/saibaPrecosDirAP.png"
          alt="Agende aqui"
        />
      </Link>
      <Link href="http://grupodentotal-rdsm-site.rds.land/estetica-saiba-nossos-precos">
        <img
          className=" saibaPrecos semMarginEsq"
          loading="lazy"
          src="/images/saibaPrecosDirAP.png"
          alt="Agende aqui"
        />
      </Link>
      <Link href="https://wa.me/5521972878038">
        <img
          className="agendeAqui saibaPrecosDir"
          loading="lazy"
          src="/images/agendeAquiDirAP.png"
          alt="Agende aqui"
        />
      </Link>
      {/* <ModalExample
                srcImg="/images/agendeAqui2.png"
                className="agendeAqui"
              /> */}
    </Col>
  )
}

export default agendeLateralDir
