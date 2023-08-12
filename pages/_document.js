import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html style={{ scrollBehavior: 'smooth'}} className='scroll-smooth'>
      <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
            <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i) {
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WVBHD4F');
              `,
            }}
          />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-WVBHD4F"
                  height="0"
                  width="0"
                  style="display:none;visibility:hidden"
                ></iframe>
              `,
            }}
          />
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}