import React from 'react'
import Link from 'next/link'

import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'

import AgendaLateralDir from '../AgendaLateralDir'

const DivOrtholook = () => {
  return (
    <Contentor id="ortolook">
      <Container className="ortolookContainer gothamBook">
        <Row className="linhaSinuosa linhaSinuosaDireita ">
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
          <AgendaLateralDir className="someMobile" />
        </Row>
        <Row className="rowPacientes gothamBook">
          <Col className="pacientes paciente1">
            <div>
              <img
                loading="lazy"
                src="/images/paciente1.png"
                alt="Paciente 1"
              />
              <br />
              <h5>Cabe no bolso</h5>
            </div>
          </Col>
          <Col className="pacientes">
            <div>
              <img
                loading="lazy"
                src="/images/paciente2.png"
                alt="Paciente 2"
              />
              <h5>
                Dentistas especializados em <br />
                harmonização orofacial
              </h5>
            </div>
          </Col>
          <Col className="pacientes paciente3">
            <div>
              <img
                loading="lazy"
                src="/images/paciente3.png"
                alt="Paciente 3"
              />
              <br />
              <h5>Faça no mesmo dia</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Contentor>
  )
}

export default DivOrtholook
