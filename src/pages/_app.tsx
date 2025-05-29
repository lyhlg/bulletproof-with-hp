/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'
import Script from 'next/script'
import NextApp from 'next/app'

import type { AppContext, AppProps as NextAppProps } from 'next/app'
import { createQueryClient } from '@/libs/create-query-client'


const App = ({
  Component,
  pageProps,
}: NextAppProps) => {
  const queryClient = createQueryClient()

  return (
    <>
      <Head>
        <meta name="keyword" content="강남언니, 이벤트" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, user-scalable=no"
        />
      </Head>
      <Script src="/__ENV.js" strategy="beforeInteractive" />

      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}

App.getInitialProps = async (context: AppContext) => {
  const appProps = await NextApp.getInitialProps(context)

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      isVConsoleEnabled: true,
    },
  }
}

export default App
