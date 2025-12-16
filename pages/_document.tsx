// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO */}
        <meta
          name="description"
          content="Getahun Negash - Senior Full-Stack and WordPress Developer delivering high-performing modern web applications."
        />
        <meta name="author" content="Getahun Negash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://your-domain.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Getahun Negash – Full-Stack & WordPress Developer"
        />
        <meta
          property="og:description"
          content="Building scalable, secure, and user-friendly web solutions using React, Next.js, MERN, and WordPress."
        />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta
          property="og:image"
          content="https://your-domain.com/images/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Getahun Negash – Full-Stack & WordPress Developer"
        />
        <meta
          name="twitter:description"
          content="Modern web applications and WordPress solutions that perform."
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/og-image.png"
        />

        {/* PWA and theme color (optional) */}
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
