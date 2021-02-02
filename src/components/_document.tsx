import React, { useEffect } from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    useEffect(() => {
      const script = document.createElement('script')
      script.src =
        'https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js'
      script.async = true
      document.body.appendChild(script)
    })
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="images/iconOrtholook2.svg" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MVZBRZP');`
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVZBRZP"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MVZBRZP"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          `
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            async
            src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/45f2dd6c-bfa7-4b84-b302-e65c08c3049c-loader.js"
          ></script>
        </body>
      </Html>
    )
  }
}
