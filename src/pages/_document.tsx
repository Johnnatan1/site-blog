import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
           <link rel="preconnect" href="https://fonts.googleapis.com"/>
           <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,500&family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400&family=Poppins:wght@400;500;700;900&family=Roboto+Mono:wght@100&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet"/>
           <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>

        <body>
            <Main />
            <NextScript />
        </body>
      </Html>  
    )
  }
}