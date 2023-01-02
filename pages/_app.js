import { StoreContext } from "../store/StoreContext"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreContext>
      <Component { ...pageProps } />
    </StoreContext>
  )
}

export default MyApp
