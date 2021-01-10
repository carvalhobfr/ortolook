import React from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import NavOrtho from '../components/NavBar'
import HeaderEstetica from '../components/Estetica/HeaderEstetica'
import DivOrtholook from '../components/Estetica/DivOrtholook'
import Tratamentos from '../components/Estetica/Tratamentos'
import Depoimentos from '../components/Estetica/DepoimentosEstetica'
import Footer from '../components/Footer'

const Estetica: React.FC = () => {
  return (
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
      <Footer />
    </Container>
  )
}

export default withRouter(Estetica)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
