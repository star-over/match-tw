import Head from "next/head";
import Script from "next/script";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (<>
    <Script
      id="gtm"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-E7DF1SB3B4');`}} />
    <Head>
      <title>Find a closest tailwind color</title>
      <meta name="google-site-verification" content="-sOdF1gPYCr2Bp9yRF2mh-XlhKi7-n0V8h_OeHR8810" />
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
    <Component {...pageProps} />
  </>);
}

export default MyApp;
