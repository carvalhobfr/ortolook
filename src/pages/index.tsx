import React from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

import Homeorto from '../components/HomeOrto'

const Index: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Home"
        showTitleSuffix
        showIndexPage
        description="Home Ortolook"
      ></SEO>
      <Homeorto />
    </Container>
  )
}

export default withRouter(Index)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
