import * as Icons from "react-icons/sl";
import { IconBaseProps, IconType } from "react-icons";

type SlIconType = typeof Icons & {
  [key: string]: IconType;
};

interface DynamicSlIconProps extends IconBaseProps {
  name: string;
}

const DynamicSlIcon = ({ name, ...rest }: DynamicSlIconProps) => {
  const iconMap = Icons as SlIconType;
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return <Icons.SlAnchor {...rest} />;
  }

  return <IconComponent {...rest} />;
};

export default DynamicSlIcon;
