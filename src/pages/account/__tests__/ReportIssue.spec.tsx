import { rest } from 'msw';
import { server } from '@/mocks/server';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithFullContext } from '@/utils/test';
import { ENDPOINTS } from '@/utils/constants';
import ReportIssue from '../ReportIssue';

describe('ReportIssue component', () => {
  it('should render', () => {
    renderWithFullContext(<ReportIssue />);

    expect(screen.getByText('youremail@gmail.com')).toBeInTheDocument();
    expect(screen.getByLabelText('Question/Comments')).toBeInTheDocument();
  });

  it('should show validation messages for message field', async () => {
    renderWithFullContext(<ReportIssue />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    userEvent.click(submitBtn);
    expect((await screen.findByTestId('errorMessage-message')).textContent).toEqual(
      'message is a required field',
    );
    expect(submitBtn).toBeDisabled();

    userEvent.type(
      screen.getByLabelText('Question/Comments'),
      "Hi! I'd like to find out how this works.",
    );
    userEvent.click(submitBtn);
    expect((await screen.findByTestId('errorMessage-message')).textContent).toEqual(
      'please add a minimum of 50 characters.',
    );
  });

  it('should send question/comments and show success message', async () => {
    server.use(
      rest.post(ENDPOINTS.MESSAGE, (req, res, ctx) => res(ctx.json({ message: 'successful' }))),
    );

    renderWithFullContext(<ReportIssue />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    userEvent.type(
      screen.getByLabelText('Question/Comments'),
      "Hi! I'd like to find out how this works. Got a minute?",
    );

    userEvent.click(submitBtn);

    waitFor(() =>
      expect(
        screen.queryByText('We will be in contact with you within 2-3 business days.'),
      ).toBeInTheDocument(),
    );
  });

  it('should fail to send question/comments and show error in toast', async () => {
    server.use(
      rest.post(ENDPOINTS.MESSAGE, (req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({
            message: 'Not found',
          }),
        ),
      ),
    );

    renderWithFullContext(<ReportIssue />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });

    userEvent.type(
      screen.getByLabelText('Question/Comments'),
      "Hi! I'd like to find out how this works. Got a minute?",
    );

    userEvent.click(submitBtn);

    // screen.getByRole('alert');

    waitFor(() =>
      expect(
        screen.queryByText('We will be in contact with you within 2-3 business days.'),
      ).not.toBeInTheDocument(),
    );
  });
});
