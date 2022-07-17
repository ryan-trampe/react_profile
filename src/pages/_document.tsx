import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { Component } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render(): JSX.Element {
      return(
        <Html lang='en'>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"/>
          </Head>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
      );
  }
}

export default MyDocument;
