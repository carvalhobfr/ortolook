import React, { useState, useEffect } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'
import NavOrtho from '../components/Aparelhos/NavBar'
import HeaderAparelhos from '../components/Aparelhos/HeaderAparelhos'
import DivOrtholookAparelhos from '../components/Aparelhos/DivOrtholookAparelhos'
import Tratamentos from '../components/Aparelhos/TratamentosAparelhos'
import Depoimentos from '../components/Aparelhos/DepoimentosAparelhos'
import UnidadesAparelhos from '../components/Aparelhos/UnidadesAparelhos'
import LoadingScreen from '../components/LoadingScreen'
import FooterAparelhos from '../components/Aparelhos/FooterAparelhos'

const Aparelhos: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
