import Head from 'next/head';
import '../src/styles/global.css'
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Clube Candeias</title>
          {/* <meta aria-description='' */}
          <meta name="desc" content="São mais de 500 mil opções de hospedagem no mundo inteiro. Com o Clube Candeias o mundo é o limite." />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Analytics />
        <Component {...pageProps} />
      </>
    );
  }