import React, { useState, useEffect, useRef } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import NavOrtho from '../components/Estetica/0NavBar'
import HeaderEstetica from '../components/Estetica/1HeaderEstetica'
import DivOrtholook from '../components/Estetica/2DivOrtholook'
import Tratamentos from '../components/Estetica/3Tratamentos'
import Depoimentos from '../components/Estetica/4DepoimentosEstetica'
import UnidadesEstetica from '../components/Estetica/5UnidadesEstetica'
import LoadingScreen from '../components/Estetica/9LoadingScreenEstetica'
import FooterEstetica from '../components/Estetica/6FooterEstetica'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)

    const options = {
      autoConfig: true,
      debug: false
    }
  }, [])
  useEffect(() => {
    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.init('276341384153524')
        ReactPixel.pageView()
      })
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

const Estetica: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <Container>
          <SEO
            title="Estética"
            showTitleSuffix
            showIndexPage
            description="Ortolook"
          ></SEO>
          <NavOrtho />
          <FadeInSection>
            <HeaderEstetica />
          </FadeInSection>
          <FadeInSection>
            <DivOrtholook />
          </FadeInSection>
          <FadeInSection>
            <Tratamentos />
          </FadeInSection>
          <FadeInSection>
            <Depoimentos />
          </FadeInSection>
          <FadeInSection>
            <UnidadesEstetica />
            <FooterEstetica />
          </FadeInSection>
        </Container>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default withRouter(Estetica)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
