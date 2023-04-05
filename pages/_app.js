import '../styles/globals.css'
import { MensajeProvider } from '../context/MensajeProvider'
import { TrabajoProvider } from '../context/TrabajoProvider'
import { AuthProvider } from '../context/AuthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <TrabajoProvider>
        <MensajeProvider>
          <Component {...pageProps} />
        </MensajeProvider>
      </TrabajoProvider>
    </AuthProvider>
  )
}

export default MyApp
