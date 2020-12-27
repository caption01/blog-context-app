import React, { FunctionComponent, ReactChild } from "react";
import { Typography } from "antd";

const { Title: Tit, Text: Txt } = Typography;

type H1Props = {
  children: ReactChild;
};

const H1: FunctionComponent<H1Props> = ({ children }) => {
  return <Tit>{children}</Tit>;
};

type H3Props = {
  children: ReactChild;
};

const H3: FunctionComponent<H3Props> = ({ children }) => {
  return <Tit level={3}>{children}</Tit>;
};

type TextProps = {
  children: ReactChild;
};

const Text: FunctionComponent<TextProps> = ({ children }) => {
  return <Txt>{children}</Txt>;
};

export { H1, H3, Text };
