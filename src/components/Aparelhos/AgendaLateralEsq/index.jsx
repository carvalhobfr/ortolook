import React, { useEffect } from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'
/* import ReactPixel from 'react-facebook-pixel'
 */
const agendeLateralEsq = () => {
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
    <Col className="agendeAqui someMobile">
      <button className="agendeAqui">
        <Link href="https://wa.me/5521972878038" onClick={pixelEvent}>
          <img
            className="agendeAqui "
            loading="lazy"
            src="/images/agendeAqui2.png"
            alt="Agende aqui"
          />
        </Link>
      </button>
      {/*       <Link href="https://wa.me/5521972878038">
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
