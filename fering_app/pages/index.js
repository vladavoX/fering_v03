import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fering Design</title>
        <meta name="description" content="Masinski radovi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
    </div>
  )
}
