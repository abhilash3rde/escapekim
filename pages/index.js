import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Parallax, useParallax } from 'react-scroll-parallax';
import { useState } from 'react';
import { ActFirstMobile } from '../components/Mobileview/ActFirstMobile';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { ActFirstDesktop } from '../components/Desktopview/ActFirstDesktop';
import { ActFirstDesktop02 } from '../components/Desktopview/ActFirstDesktop_2';

export default function Home() {






  return (
    <>
      <div className='hidden-mobile' >
        {/* <ActFirstDesktop /> */}
        <ActFirstDesktop02 />
      </div>
      <div className='visible-mobile'>
        <ActFirstMobile />
      </div>



    </>
  )
}
