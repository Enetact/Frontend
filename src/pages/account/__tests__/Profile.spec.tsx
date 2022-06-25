import { renderWithFullContext } from '@/utils/test';
import { screen, waitFor } from '@testing-library/react';
import Profile from '../Profile';

describe('Profile component', () => {
  it('should render all sections', () => {
    waitFor(() => renderWithFullContext(<Profile />));

    expect(screen.queryAllByTestId('profileSection-heading').map(el => el.textContent)).toEqual(
      ['Name', 'E-mail', 'Change Password'],
    );
  });
});
