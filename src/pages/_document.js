import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </Html>
        );
    }
}
export default MyDocument;
