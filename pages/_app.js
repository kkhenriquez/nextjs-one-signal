import { Fragment } from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
        <script dangerouslySetInnerHTML={{__html: `window.OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.init({appId: "8375f0e1-7429-43b7-b05b-8637674a5b9b",});});`}}/>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
