import { AppContext, AppInitialProps } from "next/app";

import { Layout } from "components/templates";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppContext & AppInitialProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
