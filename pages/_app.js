import Head from "next/head"
import { StoreContext } from "../store/StoreContext"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Find a closest tailwind color</title>
      <meta name='description' content='Closest color to tailwind palette CSS' />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />
      <link rel="icon" type="image/png" sizes="196x196" href="/favicon/favicon-196x196.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
    <StoreContext>
      <Component { ...pageProps } />
    </StoreContext>
  </>)
}

export default MyApp
