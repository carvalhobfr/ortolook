import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row
} from 'reactstrap'
import AgendaLateralDir from '../AgendaLateralDir'

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
    altText: 'Slide 4 1'
  }
]

const itemsMobile = [
  {
    src: 'images/depoimento11ES.png',
    altText: 'Slide 11'
  },
  {
    src: 'images/depoimento12ES.png',
    altText: 'Slide 21'
  },
  {
    src: 'images/depoimento11ES.png',
    altText: 'Slide 31'
  },
  {
    src: 'images/depoimento12ES.png',
    altText: 'Slide 41'
  }
]

const Depoimentos = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndexMobile, setActiveIndexMobile] = useState(5)
  const [animating, setAnimating] = useState(false)
  const [animatingMobile, setAnimatingMobile] = useState(false)

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

  const nextMobile = () => {
    if (animatingMobile) return
    const newIndexMobile =
      activeIndexMobile === itemsMobile.length - 1 ? 0 : activeIndexMobile + 1
    setActiveIndexMobile(newIndexMobile)
  }

  const previousMobile = () => {
    if (animatingMobile) return
    const newIndexMobile =
      activeIndexMobile === 0 ? itemsMobile.length - 1 : activeIndexMobile - 1
    setActiveIndexMobile(newIndexMobile)
  }

  const goToIndexMobile = newIndexMobile => {
    if (animatingMobile) return
    setActiveIndexMobile(newIndexMobile)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="carrosselPC"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <img loading="lazy" src={item.src} alt={item.altText} />
        <CarouselCaption captionText="caption" captionHeader={item.caption} />
      </CarouselItem>
    )
  })

  const slidesMobile = itemsMobile.map(item2 => {
    return (
      <CarouselItem
        className="carrosselPC"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item2.altText}
      >
        <img loading="lazy" src={item2.src} alt={item2.altText} />
        <CarouselCaption
          captionText="{item2.caption}"
          captionHeader={item2.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <Contentor>
      <Container className="ortolookContainer">
        <Row className="linhaSinuosaDepoimento  linhaSinuosa  linhaSinuosaDireita">
          <br></br>
        </Row>
      </Container>
      <Carousel
        className="someMobile"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
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
      <Carousel
        className="openMobile"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slidesMobile}
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
      {/* <Carousel
        className="openMobile"
        activeIndex={activeIndexMobile}
        next={nextMobile}
        previous={previousMobile}
      >
        <CarouselIndicators
          items={itemsMobile}
          activeIndex={activeIndexMobile}
          onClickHandler={goToIndexMobile}
        />
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
      </Carousel> */}
      <AgendaLateralDir />
    </Contentor>
  )
}

export default Depoimentos
