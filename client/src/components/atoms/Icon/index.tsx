import { FunctionComponent } from "react";
import { CodepenOutlined, QuestionOutlined } from "@ant-design/icons";
import CSS from "csstype";

type IconProps = {
  type: String;
  style: CSS.Properties;
};

const IconComponent: FunctionComponent<IconProps> = ({ type, style }) => {
  const renderIcon = (type: IconProps["type"]) => {
    switch (type) {
      case "CodepenOutlined": {
        return <CodepenOutlined style={{ ...style }} />;
      }

      default: {
        return <QuestionOutlined style={{ ...style }} />;
      }
    }
  };

  return renderIcon(type);
};

export default IconComponent;
