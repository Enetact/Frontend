import { render, screen } from '@testing-library/react';
import LoadingState from '../';

describe('LoadingState component', () => {
  it('should render loading state with default circular loader', () => {
    render(
      <LoadingState loading>
        <div>Hello, world!</div>
      </LoadingState>,
    );

    expect(screen.getByTestId('circularProgressIcon')).toBeInTheDocument();
    expect(screen.queryByText(/hello, world!/i)).not.toBeInTheDocument();
  });

  it('should render loading state with custom loader', async () => {
    render(
      <LoadingState loading loader={<button>Another Loader</button>}>
        <div>Hello, world!</div>
      </LoadingState>,
    );

    expect(screen.getByText(/another loader/i)).toBeInTheDocument();
    expect(screen.queryByText(/hello, world!/i)).not.toBeInTheDocument();
  });

  it('should render content when loading is false', () => {
    render(
      <LoadingState loading={false}>
        <div>Hello, world!</div>
      </LoadingState>,
    );

    expect(screen.queryByTestId('circularProgressIcon')).not.toBeInTheDocument();
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
  });
});
