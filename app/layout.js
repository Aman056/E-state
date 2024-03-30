import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const siteMetadata = {
  title: 'Prestige properties',
  description: 'Generated by Aman',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <link
          href="https://rsms.me/inter/inter.css"
          rel="stylesheet"
        />
      </Head>
      <main className={inter.className}>{children}</main>
    </>
  );
}
