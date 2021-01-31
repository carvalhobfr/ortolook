import React, { useState } from 'react'
import AgendeAquiDir from '../AgendaLateralDir'
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap'
import { Contentor } from './styles'

const items = [
  {
    src: '/images/tratamentos11AP.png',
    id: 1,
    altText: 'Slide 1'
  },
  {
    src: '/images/tratamentos21AP.png',
    id: 2,
    altText: 'Slide 2'
  },
  {
    src: '/images/tratamentos31AP.png',
    id: 3,
    altText: 'Slide 3'
  },
  {
    src: '/images/tratamentos41AP.png',
    id: 4,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos42AP1.png',
    id: 5,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos43AP.png',
    id: 6,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos45AP.png',
    id: 7,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos44AP.png',
    id: 8,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos51AP.png',
    id: 9,
    altText: 'Slide 5'
  },
  {
    src: '/images/tratamentos61AP.png',
    id: 10,
    altText: 'Slide 6'
  }
]
const itemsMobile = [
  {
    src: '/images/tratamentos41AP.png',
    id: 1,
    altText: 'Slide 40'
  },
  {
    src: '/images/tratamentos42AP1.png',
    id: 2,
    altText: 'Slide 41'
  },
  {
    src: '/images/tratamentos43AP.png',
    id: 3,
    altText: 'Slide 42'
  },
  {
    src: '/images/tratamentos45AP.png',
    id: 4,
    altText: 'Slide 43'
  },
  {
    src: '/images/tratamentos44AP.png',
    id: 5,
    altText: 'Slide 44'
  }
]

const Tratamentos = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndexMobile, setActiveIndexMobile] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }
  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const nextMobile = () => {
    if (animating) return
    const nextIndexMobile =
      activeIndexMobile === itemsMobile.length - 1 ? 0 : activeIndexMobile + 1
    setActiveIndexMobile(nextIndexMobile)
  }

  const previousMobile = () => {
    if (animating) return
    const nextIndexMobile =
      activeIndex === 0 ? itemsMobile.length - 1 : activeIndexMobile - 1
    setActiveIndexMobile(nextIndexMobile)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img loading="lazy" src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  })

  const slidesMobile = itemsMobile.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img loading="lazy" src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  })

  return (
    <Contentor id="tratamentos">
      <Container className="ortolookContainer">
        <Row>
          <h1 className="bemioItalic">TRATAMENTOS</h1>
        </Row>
        <Row className="rowTratamentos someMobile">
          <Col className="colTratamentos">
            <button onClick={() => setActiveIndex(0)}>
              <img
                loading="lazy"
                src="/images/tratamento1AP.png"
                alt="Tratamento 1"
              />
            </button>
            <button onClick={() => setActiveIndex(1)}>
              <img
                loading="lazy"
                src="/images/tratamento2AP.png"
                alt="Tratamento 2"
              />
            </button>
            <button onClick={() => setActiveIndex(2)}>
              <img
                loading="lazy"
                src="/images/tratamento3AP.png"
                alt="Tratamento 3"
              />
            </button>
            <button onClick={() => setActiveIndex(3)}>
              <img
                loading="lazy"
                src="/images/tratamento4AP.png"
                alt="Tratamento 4"
              />
            </button>
            <button onClick={() => setActiveIndex(8)}>
              <img
                loading="lazy"
                src="/images/tratamento5AP.png"
                alt="Tratamento 5"
              />
            </button>
            <button onClick={() => setActiveIndex(9)}>
              <img
                loading="lazy"
                src="/images/tratamento6AP.png"
                alt="Tratamento 6"
              />
            </button>
          </Col>
          <Col className="colCarrossel">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
        </Row>
        {/* mobile */}
        <Col className="colTratamentos openMobile">
          <a href="#tratamento1">
            <img
              loading="lazy"
              src="/images/tratamento1AP.png"
              alt="Tratamento 1"
            />
          </a>
          <a href="#tratamento2">
            <img
              loading="lazy"
              src="/images/tratamento2AP.png"
              alt="Tratamento 2"
            />
          </a>
          <a href="#autoligado">
            <img
              loading="lazy"
              src="/images/tratamento3AP.png"
              alt="Tratamento 3"
            />
          </a>
          <a href="#estetico">
            <img
              loading="lazy"
              src="/images/tratamento4AP.png"
              alt="Tratamento 4"
            />
          </a>
          <a href="#tratamento5">
            <img
              loading="lazy"
              src="/images/tratamento5AP.png"
              alt="Tratamento 5"
            />
          </a>
          <a href="#clareamento">
            <img
              loading="lazy"
              src="/images/tratamento6AP.png"
              alt="Tratamento 6"
            />
          </a>
        </Col>
        <Col className="openMobile imgColunaTratamento">
          <img
            loading="lazy"
            id="tratamento1"
            src="/images/tratamentos11AP.png"
            alt="slide1"
          />
          <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
            <img
              loading="lazy"
              id="tratamento2"
              src="/images/agendeAquiMobTratamento.png"
              alt="Agende Aqui"
              className="openMobile"
            />
          </a>
          <img
            loading="lazy"
            id="autoligado"
            src="/images/tratamentos21AP.png"
            alt="slide2"
          />
          <Carousel
            activeIndex={activeIndexMobile}
            next={nextMobile}
            previous={previousMobile}
          >
            {slidesMobile}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previousMobile}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={nextMobile}
            />
          </Carousel>
          <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
            <img
              loading="lazy"
              src="/images/agendeAquiMobTratamento4.png"
              alt="Agende Aqui"
              className="openMobile"
            />
          </a>
          <img
            loading="lazy"
            id="tratamento5"
            src="/images/tratamentos51AP.png"
            alt="slide9"
          />
          <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
            <img
              loading="lazy"
              src="/images/agendeAquiMobTratamento5.png"
              alt="Agende Aqui"
              className="openMobile"
            />
          </a>
          <img
            loading="lazy"
            id="clareamento"
            src="/images/tratamentos61AP.png"
            alt="slide10"
          />
          <a href="https://api.whatsapp.com/send/?phone=5521972878038&text&app_absent=0">
            <img
              loading="lazy"
              src="/images/agendeAquiMobTratamento6.png"
              alt="Agende Aqui"
              className="openMobile"
            />
          </a>
        </Col>
        {/*  <AgendeAquiDir /> */}
      </Container>
    </Contentor>
  )
}

export default Tratamentos
