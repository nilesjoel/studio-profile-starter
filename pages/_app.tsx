import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { SessionProvider } from "next-auth/react"
import GlobalStyle from '../styles/globalstyles'
import { StudioContextProvider } from '../contexts/StudioContext';

import { HelmetProvider } from 'react-helmet-async';

import theme from '../theme/theme'
import StudioLayout from '../components/Layout/StudioLayout';



import type { Session } from "next-auth"

// const theme: DefaultTheme = {
//   colors: {
//     primary: '#111',
//     secondary: '#0070f3',
//   },
// }

const studioContext = {}
const helmetContext = {};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
    <SessionProvider session={session}>
      <StudioContextProvider state={studioContext}>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StudioLayout>
            <Component {...pageProps} />
            </StudioLayout>
          </ThemeProvider>
        </HelmetProvider>
      </StudioContextProvider>
      </SessionProvider>
    </>
  )
}





