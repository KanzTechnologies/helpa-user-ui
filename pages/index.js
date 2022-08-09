import Head from 'next/head'
import HomePage from './HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Helpa</title>
        <meta name="description" content="Donate and raise funds easily with Helpa" />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>
      <HomePage />
    </>
  )
}
