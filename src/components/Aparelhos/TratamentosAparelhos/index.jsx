import React, { useState } from 'react'

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
    src: '/images/tratamentos42AP.png',
    id: 5,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos43AP.png',
    id: 6,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos44AP.png',
    id: 7,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos45AP.png',
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
    id: 11,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamentos42AP.png',
    id: 12,
    altText: 'Slide 41'
  },
  {
    src: '/images/tratamentos43AP.png',
    id: 13,
    altText: 'Slide 42'
  },
  {
    src: '/images/tratamentos45AP.png',
    id: 14,
    altText: 'Slide 43'
  },
  {
    src: '/images/tratamentos44AP.png',
    id: 15,
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
        <img src={item.src} alt={item.altText} />
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
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    )
  })

  return (
    <Contentor>
      <Container className="ortolookContainer">
        <Row>
          <img
            className="tratamentoAparelho"
            src="images/tratamentosAparelho.png"
            alt="Tratamentos"
          />
          <Col className="saibaNossosPrecos someMobile">
            <a href="https://wa.me/5521972878038" className="agendeAqui">
              <img src="/images/agendeAquiSmall.png" alt="Agende Aqui" />
            </a>
          </Col>
        </Row>
        <Row className="rowTratamentos someMobile">
          <Col className="colTratamentos">
            <button onClick={() => setActiveIndex(0)}>
              <img src="/images/tratamento1AP.png" alt="Tratamento 1" />
            </button>
            <button onClick={() => setActiveIndex(1)}>
              <img src="/images/tratamento2AP.png" alt="Tratamento 2" />
            </button>
            <button onClick={() => setActiveIndex(2)}>
              <img src="/images/tratamento3AP.png" alt="Tratamento 3" />
            </button>
            <button onClick={() => setActiveIndex(3)}>
              <img src="/images/tratamento4AP.png" alt="Tratamento 4" />
            </button>
            <button onClick={() => setActiveIndex(8)}>
              <img src="/images/tratamento5AP.png" alt="Tratamento 5" />
            </button>
            <button onClick={() => setActiveIndex(9)}>
              <img src="/images/tratamento6AP.png" alt="Tratamento 6" />
            </button>
          </Col>
          <Col>
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
        <Col className="openMobile imgColunaTratamento">
          <img src="/images/tratamentos11AP.png" alt="slide1" />
          <img id="autoligado" src="/images/tratamentos21AP.png" alt="slide2" />
          <img id="estetico" src="/images/tratamentos31AP.png" alt="slide3" />
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
          <img src="/images/tratamentos51AP.png" alt="slide9" />
          <img
            id="clareamento"
            src="/images/tratamentos61AP.png"
            alt="slide10"
          />
        </Col>
      </Container>
    </Contentor>
  )
}

export default Tratamentos
