import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeIDEx - Grupo 5</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
