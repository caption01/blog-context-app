import { FunctionComponent, ReactNode } from "react";

import { Layout } from "components/organisms";

type MainProps = {
  children: ReactNode;
};

const Main: FunctionComponent<MainProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Main;
