import Head from 'next/head'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Products from '../components/Products'
import Materials from '../components/Materials'
import ScrollBack from '../components/ScrollBack'

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
      <About />
      <Products />
      <Materials />
      <ScrollBack />
    </div>
  )
}
