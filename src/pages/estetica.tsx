import React, { useState, useEffect } from 'react'
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
import LoadingScreen from '../components/LoadingScreen'
import Footer from '../components/Footer'

const Estetica: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
          <HeaderEstetica />
          <DivOrtholook />
          <Tratamentos />
          <Depoimentos />
          <UnidadesEstetica />
          <Footer />
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
