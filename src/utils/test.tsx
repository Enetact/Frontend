import { MemoryRouter, Routes, Route, Navigate } from 'react-router';
import { render } from '@testing-library/react';
import { StyledEngineProvider } from '@mui/material';
import ThemeProvider from '@/services/theme';
import FetcherProvider from '@/services/fetcher';
import { combineProviders } from '@/services/providers';
import { AppProvider } from '@/context/AppContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import { TransitionProvider } from '@/context/TransitionContext';
import NotFound from '@/pages/not-found/NotFound';
import { NOT_FOUND_PATH } from '@/utils/paths';
import { AuthProvider } from '@/context/AuthContext';

type RenderOptions = {
  path?: string;
  initialIndex?: number;
  initialEntries?: string[];
};

/**
 * Wrap the component with a memory router so we can control the router params.
 * Second argument is the options object. `path` controls the tested component path.
 * `initialEntries` tells the router what the available paths are, and `initialIndex` selects the current path
 * from the `initialEntries` array.
 */
export function renderWithRouter(
  element: JSX.Element,
  { path = '/', initialEntries = [], initialIndex = 0 }: RenderOptions = {},
) {
  const paths = [path, ...initialEntries, NOT_FOUND_PATH];

  return render(
    <MemoryRouter initialEntries={paths} initialIndex={initialIndex}>
      <Routes>
        <Route path={path} element={element} />
        <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        <Route path="*" element={<Navigate replace to={NOT_FOUND_PATH} />} />
      </Routes>
    </MemoryRouter>,
  );
}

const MockedProviders = combineProviders(
  [StyledEngineProvider, { injectFirst: true }],
  ThemeProvider,
  FetcherProvider,
  AppProvider,
  AuthProvider,
  TransitionProvider,
  AnalyticsProvider,
);

export const renderWithFullContext = (
  element: JSX.Element,
  { path = '/', initialEntries = [], initialIndex = 0 }: RenderOptions = {},
) => {
  const paths = [path, ...initialEntries, NOT_FOUND_PATH];

  return render(
    <MemoryRouter initialEntries={paths} initialIndex={initialIndex}>
      <MockedProviders>
        <Routes>
          <Route path={path} element={element} />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          <Route path="*" element={<Navigate replace to={NOT_FOUND_PATH} />} />
        </Routes>
      </MockedProviders>
    </MemoryRouter>,
  );
};
