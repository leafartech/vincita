import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Kruger Toledo</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}