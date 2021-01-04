import React, { FunctionComponent, ReactChild } from "react";
import { Typography } from "antd";

const { Title: Tit, Text: Txt } = Typography;

const H1: FunctionComponent = ({ children }) => {
  return <Tit>{children}</Tit>;
};

const H3: FunctionComponent = ({ children }) => {
  return <Tit level={3}>{children}</Tit>;
};

const Text: FunctionComponent = ({ children }) => {
  return <Txt>{children}</Txt>;
};

export { H1, H3, Text };
