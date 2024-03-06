import * as icons from 'react-bootstrap-icons';

// interface IconProps extends icons.IconProps {
//   // Cannot use "name" as it is a valid SVG attribute
//   // "iconName", "filename", "icon" will do it instead
//   iconName: keyof typeof icons;
// }

export const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}