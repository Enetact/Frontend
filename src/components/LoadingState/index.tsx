import { Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

type LoadingProps = {
  height?: number;
  loader?: string | JSX.Element;
  loading: boolean;
  children: JSX.Element | null;
};
const LoadingState = ({ height = 8, loader, loading, children }: LoadingProps) => {
  return loading ? (
    <Stack alignItems="center" justifyContent="center" my={height}>
      {loader || <CircularProgress data-testid="circularProgressIcon" />}
    </Stack>
  ) : (
    children
  );
};

export default LoadingState;
