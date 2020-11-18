import React, { FunctionComponent, ReactChild } from "react";
import { Typography } from "antd";

const { Title: Tit } = Typography;

type TitleProps = {
  chidren: ReactChild;
};

type SubtitleProps = {
  chidren: ReactChild;
};

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <Tit>{children}</Tit>;
};

const SubTitle: FunctionComponent<SubtitleProps> = ({ children }) => {
  return <Tit level={3}>{children}</Tit>;
};

export { Title, SubTitle };
