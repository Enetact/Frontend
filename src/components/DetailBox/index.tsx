import cx from 'classnames';
import { Box } from '@mui/material';
import classes from './styles.module.scss';

type DetailType = {
  title: string | JSX.Element;
  value: string | number | JSX.Element | null;
  fullWidth?: boolean;
  dataTestId?: string;
};
const DetailBox = ({ title, value, fullWidth, dataTestId }: DetailType) => (
  <div className={cx(classes.detail, { [classes.fullWidth]: fullWidth })}>
    <Box className={classes.detailTitle} data-testid={dataTestId ? `${dataTestId}-title` : ''}>
      {title}
    </Box>
    <Box className={classes.detailValue} data-testid={dataTestId ? `${dataTestId}-value` : ''}>
      {value ?? '-'}
    </Box>
  </div>
);

export default DetailBox;
