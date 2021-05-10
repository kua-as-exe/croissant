import { ConfigProvider } from '../contexts/ConfigContext'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
