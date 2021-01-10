import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const Homeorto = () => {
  return (
    <Contentor>
      <Container>
        <Row>
          <Link href="/aparelhos">
            <Col></Col>
          </Link>
          <Link href="/estetica">
            <Col></Col>
          </Link>
        </Row>
      </Container>
    </Contentor>
  )
}

export default Homeorto
