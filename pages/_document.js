import Document from 'next/document'
import { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
