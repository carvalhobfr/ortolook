import React, { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm2'

import SEO from '@/components/SEO'
import { withRouter } from 'next/router'

import { Container } from '../styles/pages/Home'
import { GetServerSideProps } from 'next'

const Form2: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      <Container>
        <SEO
          title="Home"
          showTitleSuffix
          showIndexPage
          description="Home Ortolook"
        ></SEO>
        <ContactForm />
      </Container>
    </>
  )
}

export default withRouter(Form2)

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
