import { rest } from 'msw';
import { server } from '@/mocks/server';
import { screen } from '@testing-library/react';
import { renderWithFullContext } from '@/utils/test';
import HourlyRate from '../HourlyRateInfo';
import { ENDPOINTS } from '@/utils/constants';
import userEvent from '@testing-library/user-event';

describe('HourlyRateInfo component', () => {
  server.use(
    rest.post(ENDPOINTS.ESTIMATED_QUOTATION, (req, res, ctx) =>
      res(
        ctx.json({
          status: 200,
          result: {
            rate: 205.978317,
            hourlyRate: 20.86,
          },
        }),
      ),
    ),
  );

  it('should show the loader when fetching hourly rate', async () => {
    renderWithFullContext(<HourlyRate />);

    expect(screen.getByText('ESTIMATED HOURLY RATE')).toBeInTheDocument();
    expect(screen.getByTestId('loadingIcon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /finish later/i })).toBeInTheDocument();
  });

  it('should display the hourly rate', async () => {
    renderWithFullContext(<HourlyRate />);

    expect(screen.getByText('ESTIMATED HOURLY RATE')).toBeInTheDocument();
    expect((await screen.findByTestId('hourlyRate')).textContent).toEqual('$20.86 per hour');
  });

  it('should open and close registration form', async () => {
    renderWithFullContext(<HourlyRate />);

    userEvent.click(screen.getByRole('button', { name: /finish later/i }));
    const emailField = await screen.findByPlaceholderText('youremail@email.com');
    const closeBtn = screen.getByTestId('closeRegisterButton');
    expect(emailField).toBeInTheDocument();

    userEvent.click(closeBtn);
    expect(emailField).not.toBeInTheDocument();
    expect(closeBtn).not.toBeInTheDocument();
  });

  it('should allow user finish the quote later', async () => {
    renderWithFullContext(<HourlyRate />);

    userEvent.click(screen.getByRole('button', { name: /finish later/i }));
    userEvent.type(
      await screen.findByPlaceholderText('youremail@email.com'),
      'email@gmail.com',
    );
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    // TODO:: write expectations here based on action of submit button
  });
});
