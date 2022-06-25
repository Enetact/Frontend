import cx from 'classnames';
import { Button as MButton, ButtonProps, CircularProgress } from '@mui/material';
import classes from './styles.module.scss';

const Button = ({
  type = 'button',
  children,
  color = 'primary',
  className,
  loading,
  ...rest
}: ButtonProps | any) => {
  return (
    <MButton
      type={type}
      className={cx(classes.button, className)}
      variant="contained"
      color={color}
      disabled={loading}
      disableElevation
      {...rest}
    >
      {!loading ? children : <CircularProgress size={24} />}
    </MButton>
  );
};

export default Button;
