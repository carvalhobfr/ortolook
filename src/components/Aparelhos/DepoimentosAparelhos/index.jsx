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
    src: 'images/depoimento1AP.png',
    altText: 'Slide 1'
  },
  {
    src: 'images/depoimento2AP.png',
    altText: 'Slide 2'
  },
  {
    src: 'images/depoimento3AP.png',
    altText: 'Slide 3'
  },
  {
    src: 'images/depoimento2AP.png',
    altText: 'Slide 2'
  }
]
const itemsMobile = [
  {
    src: 'images/depoimentos21AP.png',
    altText: 'Slide 1'
  },
  {
    src: 'images/depoimentos22AP.png',
    altText: 'Slide 2'
  },
  {
    src: 'images/depoimentos21AP.png',
    altText: 'Slide 3'
  },
  {
    src: 'images/depoimentos22AP.png',
    altText: 'Slide 2'
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
  const slidesMobile = itemsMobile.map(item => {
    return (
      <CarouselItem
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
      <Container className="ortholookContainer2">
        <img
          className="linhaSinuosaDepoimento"
          src="/images/sorrisosQueFalam.png"
          alt="Sorrisos que falam"
        />
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
          items={itemsMobile}
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
    </Contentor>
  )
}

export default Depoimentos
