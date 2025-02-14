// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global Title and Meta Tags */}
        <title>Getahun - Software Engineer</title>
        <meta name="description" content="Getahun Negash - Software Engineer" />
        <meta name="author" content="Getahun Negash" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
