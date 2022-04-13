import '../styles/globals.css'

import '../styles/layout.css'
import Header from '../comps/Header';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header></Header>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
