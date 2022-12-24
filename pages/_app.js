import { AppStore } from "../context/store"
import { StoreContextProvider } from "../context/StoreContextProvider"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppStore>
      <StoreContextProvider>
        <Component { ...pageProps } />
      </StoreContextProvider>
    </AppStore>
  )
}

export default MyApp
