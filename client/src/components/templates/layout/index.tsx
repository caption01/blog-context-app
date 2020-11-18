import { FunctionComponent, ReactChild } from "react";
import styled from "styled-components";

const AppBody = styled.div`
  width: 70vw;
  min-height: 100vh;
  margin: 0 auto;
`;

type Props = {
  children: ReactChild;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return <AppBody>{children}</AppBody>;
};

export default Layout;
