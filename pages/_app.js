import '../styles/globals.css'
import '../globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      duration: 500,
    })

  }, []);


  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
