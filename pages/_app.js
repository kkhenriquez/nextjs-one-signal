import { Fragment } from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        {/* <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
        <script dangerouslySetInnerHTML={{__html: `window.OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.init({appId: "8375f0e1-7429-43b7-b05b-8637674a5b9b",});});`}}/> */}
        <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WRK55XN');`}}/>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
