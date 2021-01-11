import React from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const DivOrtholook = () => {
  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row>
          <h1>A ORTOLOOK</h1>
        </Row>
        <Row>
          <Col>
            <p>
              Nós somos uma rede de clínicas
              <br /> localizadas no estado do Rio de Janeiro <br /> com
              expertise em procedimentos
              <br />
              orofaciais e ortodônticos.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="pacientes">
            <img src="/images/slideAparelhos1.png" alt="Paciente 1" />
            <br />
            <h5>coloque no mesmo dia</h5>
          </Col>
          <Col className="pacientes">
            <img src="/images/slideAparelhos2.png" alt="Paciente 1" />
            <br />
            <h5>atendimento descontraído</h5>
          </Col>
          <Col className="pacientes">
            <img src="/images/slideAparelhos3.png" alt="Paciente 1" />
            <br />
            <h5>não precisa quebrar o cofrinho</h5>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default DivOrtholook
