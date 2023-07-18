/* import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />

      <style jsx global>{`
            span {
              color: blue;
            }
          `}</style>
    </>
  )
} */

///////////////////

import Layout from '@/components/Lyaout'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </ Layout>
    </>
  )
}

