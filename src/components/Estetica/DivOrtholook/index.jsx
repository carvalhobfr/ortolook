import React from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendeLateral from '../AgendaLateral'

const DivOrtholook = () => {
  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row className="linhaSinuosa">
          <br></br>
        </Row>
        <Row>
          <Col xs="6">
            <p>
              Nós somos uma rede de clínicas
              <br /> localizadas no estado do Rio de Janeiro <br /> com
              expertise em procedimentos
              <br />
              orofaciais e ortodônticos.
            </p>
          </Col>
          <AgendeLateral />
        </Row>
        <Row>
          <Col className="pacientes">
            <img src="/images/paciente1.png" alt="Paciente 1" />
            <br />
            <h5>cabe no bolso</h5>
          </Col>
          <Col className="pacientes">
            <img src="/images/paciente2.png" alt="Paciente 2" />
            <h5>
              <br />
              dentistas especializados em <br />
              harmonização orofacial
            </h5>
          </Col>
          <Col className="pacientes">
            <img src="/images/paciente3.png" alt="Paciente 3" />
            <br />
            <h5>faça no mesmo dia</h5>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default DivOrtholook
