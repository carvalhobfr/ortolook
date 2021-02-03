import React, { useState, useEffect } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'

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

const Aparelhos: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
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
          <HeaderAparelhos />
          <DivOrtholookAparelhos />
          <Tratamentos />
          <Depoimentos />
          <UnidadesAparelhos />
          <FooterAparelhos />
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
