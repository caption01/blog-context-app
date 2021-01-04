import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const AppBody = styled.div`
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
`;

const Layout: FunctionComponent = ({ children }) => {
  return <AppBody>{children}</AppBody>;
};

export default Layout;
