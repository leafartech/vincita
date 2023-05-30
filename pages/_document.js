import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth'}} className='scroll-smooth'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;800&display=swap" rel="stylesheet" />
        {/* <script dangerouslySetInnerHTML={{
          __html: `
          <script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script><script type="text/javascript"> new RDStationForms('01-lrd-689e502f9374a4e15a9c', 'null').createForm();</script>
          `
        }}/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}