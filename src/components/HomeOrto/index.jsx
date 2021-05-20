import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const Homeorto = () => {
  return (
    <Contentor>
      <Container>
        <Row className="homeOrto">
          <Col className="logoCol ">
            <img
              loading="lazy"
              src="images/logoOrtolookHome.png"
              className="someMobile ortoHomeImg"
              alt="OrtoLogo"
            />
          </Col>
          <Col className="logoCol2 ">
            <Link href="/aparelhos">
              <div className="linkAparelhos"></div>
            </Link>
            <Link href="/estetica">
              <div className="linkAparelhos"></div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default Homeorto
