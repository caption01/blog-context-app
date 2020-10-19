import { AppContext, AppInitialProps } from 'next/app'

import AppLayout from 'components/layout/layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppContext & AppInitialProps) => {
  return (
    <AppLayout>
        <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
