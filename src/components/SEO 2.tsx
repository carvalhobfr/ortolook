import React from 'react'
import Head from 'next/head'
/* import 'bootstrap/dist/css/bootstrap.min.css' */
import 'bootstrap/dist/css/bootstrap.min.css'
/*  import '/public/todos.scss' */

interface SEOProps {
  title: string
  description?: string
  image?: string
  showTitleSuffix: boolean
  showIndexPage: boolean
}
export default function SEO({
  title,
  description,
  image,
  showTitleSuffix = true,
  showIndexPage = true
}: SEOProps): JSX.Element {
  const pageTitle = `${title} ${showTitleSuffix && '| Ortolook'}`
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null
  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description}></meta>}
      {pageImage && <meta name="image" content={pageImage}></meta>}
      {!showIndexPage && <meta name="robots" content="noindex.nofollow"></meta>}
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
      <link
        href="//db.onlinewebfonts.com/c/edc378fa3251080c5b508b220462efca?family=Gotham"
        rel="preload"
        type="text/css"
        crossOrigin="anonymous"
        as="style"
      />
      <link
        href="//db.onlinewebfonts.com/c/ed524d3938b150b70d120697d516e805?family=Bemio+Italic"
        rel="preload"
        type="text/css"
        crossOrigin="anonymous"
        as="style"
      />
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
  )
}
