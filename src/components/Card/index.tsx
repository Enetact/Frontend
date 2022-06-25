import { Box, Typography } from '@mui/material';
import cx from 'classnames';
import classes from './styles.module.scss';

type CardProps = {
  header?: string | JSX.Element;
  subheader?: string | JSX.Element;
  secondary?: boolean;
  children: string | JSX.Element;
};

const Card = ({ header, secondary, children }: CardProps) => {
  return (
    <Box className={classes.card}>
      {header && (
        <Typography
          variant="h5"
          className={cx(classes.cardHeader, {
            [classes.secondary]: secondary,
          })}
        >
          {header}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Card;
