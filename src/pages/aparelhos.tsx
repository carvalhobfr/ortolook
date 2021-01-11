import React from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import NavOrtho from '../components/Aparelhos/NavBar'
import HeaderAparelhos from '../components/Aparelhos/HeaderAparelhos'
import DivOrtholookAparelhos from '../components/Aparelhos/DivOrtholookAparelhos'
import Tratamentos from '../components/Aparelhos/TratamentosAparelhos'
import Depoimentos from '../components/Aparelhos/DepoimentosAparelhos'
import Footer from '../components/Footer'

const Aparelhos: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Aparelhos"
        showTitleSuffix
        showIndexPage
        description="Ortolook"
      ></SEO>
      {/* <Homeorto /> */}
      <NavOrtho />
      <HeaderAparelhos />
      <DivOrtholookAparelhos />
      <Tratamentos />
      <Depoimentos />
      <Footer />
    </Container>
  )
}

export default withRouter(Aparelhos)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
