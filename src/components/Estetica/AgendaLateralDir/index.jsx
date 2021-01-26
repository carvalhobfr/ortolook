import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'

const agendeLateralEsq = () => {
  return (
    <Col className="agendeAqui someMobile agendeAquiDireita semMarginDir">
      <Link href="https://wa.me/5521972878038">
        <img
          className="agendeAqui semMarginEsq"
          loading="lazy"
          src="/images/saibaPrecosDir.png"
          alt="Agende aqui"
        />
      </Link>
      <Link href="https://wa.me/5521972878038">
        <img
          className="saibaPrecos saibaPrecosDir"
          loading="lazy"
          src="/images/agendeAquiDir.png"
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

export default agendeLateralEsq
