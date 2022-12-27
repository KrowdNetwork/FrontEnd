import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import { storeWrapper } from "store/store";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
  ...rest
}: AppProps<{
  session: Session;
}>) => {
  const { store } = storeWrapper.useWrappedStore(rest);

  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Provider store={store}>
        <SessionProvider session={session}>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </Chakra>
  );
};

export default MyApp;
