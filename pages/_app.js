import { AppStore } from "../context/store"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppStore>
      <Component { ...pageProps } />
    </AppStore>
  )
}

export default MyApp
