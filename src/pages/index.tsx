import React, { useEffect } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

import Homeorto from '../components/HomeOrto'
import ReactPixel from 'react-facebook-pixel'

const Index: React.FC = () => {
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false
    }
    ReactPixel.init('276341384153524', null, options)
    ReactPixel.pageView()
  })
  return (
    <>
      <Container>
        <SEO
          title="Home"
          showTitleSuffix
          showIndexPage
          description="Home Ortolook"
        ></SEO>
        <Homeorto />
      </Container>
    </>
  )
}

export default withRouter(Index)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
