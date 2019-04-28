import Document, { Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
    render () {
      return (
        <html>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet"></link>
          </Head>
          <body>
            <Main />
            <NextScript />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-103830912-1"></script>
            <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'UA-103830912-1');`}}></script>
          </body>
        </html>
      )
    }
  }