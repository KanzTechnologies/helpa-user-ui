import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/fonts/Fellix-Regular.eot" as='style' crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Fellix-Regular.ttf" as='style' crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Fellix-Regular.woff" as='style' crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Fellix-Regular.woff2" as='style' crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}