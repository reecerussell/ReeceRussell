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
          </body>
        </html>
      )
    }
  }