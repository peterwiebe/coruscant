import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'antd/dist/antd.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the Jedi Temple!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
