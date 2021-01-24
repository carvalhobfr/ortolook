import React from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

const DivOrtholook = () => {
  return (
    <Contentor>
      <Container className="ortolookContainer gothamBook">
        <Row>
          <h1 className="bemioItalic">A ORTOLOOK</h1>
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
        <Row className="rowPacientes">
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos4.png"
              alt="Paciente 1"
            />
            <br />
            <h5>mais de 50 profissionais</h5>
          </Col>
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos5.png"
              alt="Paciente 1"
            />
            <br />
            <h5>mais de 10 unidades</h5>
          </Col>
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos6.png"
              alt="Paciente 1"
            />
            <br />
            <h5>mais de 10,000 sorrisos</h5>
          </Col>
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos1.png"
              alt="Paciente 1"
            />
            <br />
            <h5>Coloque no mesmo dia</h5>
          </Col>
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos2.png"
              alt="Paciente 1"
            />
            <br />
            <h5>Atendimento descontraído</h5>
          </Col>
          <Col className="pacientes">
            <img
              loading="lazy"
              src="/images/slideAparelhos3.png"
              alt="Paciente 1"
            />
            <br />
            <h5>Não precisa quebrar o cofrinho</h5>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default DivOrtholook