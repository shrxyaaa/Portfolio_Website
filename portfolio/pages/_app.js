import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {useRouter} from "next/router";
import { useEffect, useState } from 'react';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <title>Shreya Day</title>
  </Head>
  <Navbar/>
  <div className='md:w-3/5 lg:w-2/5 m-auto  p-2'>
  <Component {...pageProps} />
  </div>
  </>
}

export default MyApp