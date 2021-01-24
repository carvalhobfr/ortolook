import React from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendeLateral from '../AgendaLateral'

const DivOrtholook = () => {
  return (
    <Contentor>
      <Container className="ortolookContainer gothamBook">
        <Row className="linhaSinuosa">
          <br></br>
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
          <AgendeLateral className="someMobile" />
        </Row>
        <Row className="rowPacientes gothamBook">
          <Col className="pacientes">
            <img loading="lazy" src="/images/paciente1.png" alt="Paciente 1" />
            <br />
            <h5>Cabe no bolso</h5>
          </Col>
          <Col className="pacientes">
            <img loading="lazy" src="/images/paciente2.png" alt="Paciente 2" />
            <h5>
              <br />
              Dentistas especializados em <br />
              harmonização orofacial
            </h5>
          </Col>
          <Col className="pacientes">
            <img loading="lazy" src="/images/paciente3.png" alt="Paciente 3" />
            <br />
            <h5>Faça no mesmo dia</h5>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default DivOrtholook
