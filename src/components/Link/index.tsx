import type { LinkProps } from 'react-router-dom';
import cx from 'classnames';
import { Link as RouteLink, useMatch, useResolvedPath } from 'react-router-dom';
import classes from './styles.module.scss';

type CustomLinkProps = LinkProps & { underline?: boolean };
const Link = ({ children, to, className, underline, ...props }: CustomLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <RouteLink
      className={cx(
        classes.link,
        { [classes.activeLink]: match, [classes.underline]: match && underline },
        className,
      )}
      to={to}
      {...props}
    >
      {children}
    </RouteLink>
  );
};

export default Link;
