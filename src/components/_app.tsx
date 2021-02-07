import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js'
    script.async = true
    document.body.appendChild(script)
  })
  return (
    <>
      <Component {...pageProps} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
