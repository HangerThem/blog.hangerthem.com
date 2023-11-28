import { AppProps } from 'next/app'
import { AuthProvider } from '@/context/authContext'
import { GlobalStyle } from '@/styles/global'
import { VariableStyle } from '@/styles/variables'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <VariableStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp