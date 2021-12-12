import {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import { theme } from '../styles/theme';
import {BarraLateralDrawerProvider} from "../contexts/BarraLateralContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BarraLateralDrawerProvider>
        <Component {...pageProps} />
      </BarraLateralDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
