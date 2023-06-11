import Siadbar from '@/Components/Siadbar/Siadbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <Siadbar>
      <Component {...pageProps} />
    </Siadbar>
  )
}
