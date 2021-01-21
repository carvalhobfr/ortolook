import React, { useState, useEffect } from 'react'
import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

import Homeorto from '../components/HomeOrto'
import LoadingScreen from '../components/LoadingScreen'

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <Container>
          <SEO
            title="Home"
            showTitleSuffix
            showIndexPage
            description="Home Ortolook"
          ></SEO>
          <Homeorto />
        </Container>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default withRouter(Index)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
