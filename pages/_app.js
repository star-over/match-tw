import { StoreContextProvider } from "../context/StoreContextProvider"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Component { ...pageProps } />
    </StoreContextProvider>
  )
}

export default MyApp
