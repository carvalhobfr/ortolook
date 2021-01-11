import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const Footer = () => {
  return (
    <Contentor>
      <Container>
        <Row>
          <Col>
            <img src="images/ortolookLogoHead.png" alt="Logo Ortolook" />
          </Col>
          <Col>
            <img src="images/ortolookC.png" alt="Coop Ortolook" />
            <p> todos os direitos reservados </p>
          </Col>
          <Col>
            <p>
              <strong>Responsável Técnico:</strong> Dr. Rodrigo de Souza CRO-RJ:
              38010 EPAO: 5138
            </p>
          </Col>
          <Row>
            <img src="images/facebookFooter.png" alt="Facebook" />
            <img src="images/instaFooter.png" alt="Instagram" />
          </Row>
        </Row>
      </Container>
    </Contentor>
  )
}

export default Footer
