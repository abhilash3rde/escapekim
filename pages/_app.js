import '../styles/globals.css'
import '../globals.css'
import 'atropos/css'
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
  </ParallaxProvider>
  )
}

export default MyApp
