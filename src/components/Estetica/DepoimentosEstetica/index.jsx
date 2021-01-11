import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from 'reactstrap'

import { Contentor } from './styles'
const items = [
  {
    src: 'images/depoimento1.png',
    altText: 'Slide 1'
  },
  {
    src: 'images/depoimento2.png',
    altText: 'Slide 2'
  },
  {
    src: 'images/depoimento1.png',
    altText: 'Slide 3'
  },
  {
    src: 'images/depoimento2.png',
    altText: 'Slide 4'
  }
]

const itemsMobile = [
  {
    src: 'images/depoimento1.png',
    altText: 'Slide 1'
  },
  {
    src: 'images/depoimento2.png',
    altText: 'Slide 2'
  },
  {
    src: 'images/depoimento1.png',
    altText: 'Slide 3'
  },
  {
    src: 'images/depoimento2.png',
    altText: 'Slide 4'
  }
]

const Depoimentos = props => {
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
        className="carrosselPC"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Contentor>
      <Container className="ortholookContainer">
        <Row className="linhaSinuosaDepoimento">
          <br></br>
        </Row>
      </Container>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
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
    </Contentor>
  )
}

export default Depoimentos
