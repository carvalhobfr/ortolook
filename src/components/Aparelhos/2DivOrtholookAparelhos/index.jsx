import React from 'react'
import Link from 'next/link'
import AgendeAquiDir from '../AgendaLateralDir'
import { Container, Row, Col } from 'reactstrap'
import { Contentor } from './styles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const DivOrtholook = () => {
  return (
    <Contentor id="ortolook">
      <Container className="ortolookContainer gothamBook">
        <Row>
          <h1 className="bemioItalic">A ORTOLOOK</h1>
        </Row>

        <Row className="textoBio">
          <Col>
            <p>
              Nós somos uma rede de clínicas localizadas no estado do Rio de
              Janeiro <br /> com expertise em procedimentos orofaciais e
              ortodônticos.
            </p>
          </Col>
        </Row>
        <Row className="rowPacientes openMobile">
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
        <Carousel
          className="someMobile"
          swipeable={false}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="all .5"
          transitionDuration={500}
          responsive={responsive}
        >
          <div>
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos4.png"
                alt="Paciente 1"
              />
              <br />
              <h5>mais de 50 profissionais</h5>
            </Col>
          </div>
          <div>
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos5.png"
                alt="Paciente 1"
              />
              <br />
              <h5>mais de 10 unidades</h5>
            </Col>
          </div>
          <div>
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos6.png"
                alt="Paciente 1"
              />
              <br />
              <h5>mais de 10,000 sorrisos</h5>
            </Col>
          </div>
          <div>
            {' '}
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos1.png"
                alt="Paciente 1"
              />
              <br />
              <h5>Coloque no mesmo dia</h5>
            </Col>
          </div>
          <div>
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos2.png"
                alt="Paciente 1"
              />
              <br />
              <h5>Atendimento descontraído</h5>
            </Col>
          </div>
          <div>
            <Col className="pacientes">
              <img
                loading="lazy"
                src="/images/slideAparelhos3.png"
                alt="Paciente 1"
              />
              <br />
              <h5>Não precisa quebrar o cofrinho</h5>
            </Col>
          </div>
        </Carousel>
        {/*       </Row> */}
      </Container>
      <AgendeAquiDir />
    </Contentor>
  )
}

export default DivOrtholook
