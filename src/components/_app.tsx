import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import '../styles/todos.scss'
import ReactPixel from 'react-facebook-pixel'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const Router = useRouter()
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js'
    script.async = true
    document.body.appendChild(script)
    ReactPixel.init('276341384153524')
    ReactPixel.pageView()
  })
  function FacebookPixel() {
    React.useEffect(() => {
      import('react-facebook-pixel')
        .then(x => x.default)
        .then(ReactPixel => {
          ReactPixel.init('276341384153524')
          ReactPixel.pageView()

          Router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
    })
    return null
  }
  console.log('useEffect test')

  return (
    <>
      <GlobalStyle>
        <Component {...pageProps} />
        <FacebookPixel />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalStyle>
    </>
  )
}

export default MyApp
