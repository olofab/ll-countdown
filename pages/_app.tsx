// pages/_app.tsx
import Head from 'next/head';
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';



export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Head>
      <title>Countdown</title>
    </Head>
        <Component {...pageProps} />
  </div>
)};
