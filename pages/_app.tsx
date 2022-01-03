import * as React from "react";

import emotionCache from "@/lib/emotion-cache";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}
