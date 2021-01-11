import React, { useState } from 'react'

import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import { Contentor } from './styles'

const items = [
  {
    src: '/images/tratamento11AP.png',
    id: 1,
    altText: 'Slide 1'
  },
  {
    src: '/images/tratamento21AP.png',
    id: 2,
    altText: 'Slide 2'
  },
  {
    src: '/images/tratamento31AP.png',
    id: 3,
    altText: 'Slide 3'
  },
  {
    src: '/images/tratamento41AP.png',
    id: 4,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamento42AP.png',
    id: 5,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamento43AP.png',
    id: 6,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamento44AP.png',
    id: 7,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamento45AP.png',
    id: 8,
    altText: 'Slide 4'
  },
  {
    src: '/images/tratamento51AP.png',
    id: 9,
    altText: 'Slide 5'
  },
  {
    src: '/images/tratamento61AP.png',
    id: 10,
    altText: 'Slide 6'
  }
]

const Tratamentos = () => {
  const [activeIndex, setActiveIndex] = useState(0)
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

  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row>
          <img
            className="tratamentoAparelho"
            src="images/tratamentosAparelho.png"
            alt="Tratamentos"
          />
          <Col className="saibaNossosPrecos">
            {/* <a href="">
              <img
                src="/images/saibaNossosPrecos.png"
                alt="Saiba Nossos Preços"
              />
            </a> */}
            <a href="https://wa.me/5521972878038">
              <img src="/images/agendeAquiSmall.png" alt="Agende Aqui" />
            </a>
          </Col>
        </Row>
        <Row className="rowTratamentos">
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
      </Container>
    </Contentor>
  )
}

export default Tratamentos
