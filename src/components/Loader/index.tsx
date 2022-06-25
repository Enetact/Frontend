import { CircularProgress } from '@mui/material';

type LoaderProps = {
  size?: number;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  thickness?: number;
};
const Loader = ({ size = 40, color = 'primary', thickness = 3.5 }: LoaderProps) => {
  return (
    <CircularProgress
      size={size}
      color={color}
      thickness={thickness}
      data-testid="loadingIcon"
    />
  );
};

export default Loader;
