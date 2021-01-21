import React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import NProgress from 'nprogress'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

Router.events.on('routeChangeStart', url => {
  console.log('Loading: MUDOOOU')
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
