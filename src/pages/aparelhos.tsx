import React, { useState, useEffect, useRef } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import NavOrtho from '../components/Aparelhos/0NavBar'
import HeaderAparelhos from '../components/Aparelhos/1HeaderAparelhos'
import DivOrtholookAparelhos from '../components/Aparelhos/2DivOrtholookAparelhos'
import Tratamentos from '../components/Aparelhos/3TratamentosAparelhos'
import Depoimentos from '../components/Aparelhos/4DepoimentosAparelhos'
import UnidadesAparelhos from '../components/Aparelhos/5UnidadesAparelhos'
import LoadingScreen from '../components/Aparelhos/LoadingScreenAparelho'
import FooterAparelhos from '../components/Aparelhos/FooterAparelhos'
import ReactPixel from 'react-facebook-pixel'

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
    ReactPixel.init('276341384153524', null, options)
    ReactPixel.pageView()
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

const Aparelhos: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 10)
  }, [])
  return (
    <>
      {loading === false ? (
        <Container>
          <SEO
            title="Aparelhos"
            showTitleSuffix
            showIndexPage
            description="Ortolook"
          ></SEO>
          <NavOrtho />
          <FadeInSection>
            <HeaderAparelhos />
          </FadeInSection>
          <FadeInSection>
            <DivOrtholookAparelhos />
          </FadeInSection>
          <FadeInSection>
            <Tratamentos />
          </FadeInSection>
          <FadeInSection>
            <Depoimentos />
          </FadeInSection>
          <FadeInSection>
            <UnidadesAparelhos />
            <FooterAparelhos />
          </FadeInSection>
        </Container>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default withRouter(Aparelhos)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
