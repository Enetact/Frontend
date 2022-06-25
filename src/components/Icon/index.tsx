import type { IconType } from './icons';
import icons from './icons';
import Color from '@/utils/colors';

type IconProps = { name: IconType; fill?: string; stroke?: string };
const Icon = ({ name, fill = Color.NONE, stroke = Color.NONE }: IconProps) => {
  const Component = icons[name];
  return Component ? <Component fill={fill} stroke={stroke} /> : null;
};

export default Icon;
