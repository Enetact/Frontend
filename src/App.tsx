import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StyledEngineProvider } from '@mui/material';
import ThemeProvider from '@/services/theme';
import { combineProviders } from '@/services/providers';
import FetcherProvider from '@/services/fetcher';
import { AppProvider } from '@/context/AppContext';
import { AuthProvider } from '@/context/AuthContext';
import { TransitionProvider } from '@/context/TransitionContext';
import { AnalyticsProvider } from '@/context/AnalyticsContext';
import Account from '@/pages/account';
import {
  LOGIN_PATH,
  LOGOUT_PATH,
  SIGNUP_PATH,
  ACCOUNT_PATH,
  NOT_FOUND_PATH,
  CREATE_QUOTE_PATH,
  RETRIEVE_QUOTE_PATH,
  FORGOT_PASSWORD_PATH,
  RESET_PASSWORD_PATH,
} from '@/utils/paths';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import PrivateRoute from '@/routes/PrivateRoute';

const Login = React.lazy(() => import('@/pages/auth/login'));
const Logout = React.lazy(() => import('@/pages/auth/logout'));
const SignUp = React.lazy(() => import('@/pages/auth/signup'));
const Landing = React.lazy(() => import('@/pages/root'));
const NotFound = React.lazy(() => import('@/pages/not-found/NotFound'));
const RetrieveQuote = React.lazy(() => import('@/pages/auth/retrieve-quote'));
const ResetPassword = React.lazy(() => import('@/pages/auth/reset-password'));
const ForgotPassword = React.lazy(() => import('@/pages/auth/forgot-password'));

const Providers = combineProviders(
  BrowserRouter,
  [StyledEngineProvider, { injectFirst: true }],
  ThemeProvider,
  FetcherProvider,
  AppProvider,
  AuthProvider,
  TransitionProvider,
  AnalyticsProvider,
);

function App() {
  return (
    <Providers>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={`${ACCOUNT_PATH}/*`} element={<Account />} />
            <Route path={RETRIEVE_QUOTE_PATH} element={<RetrieveQuote />} />
          </Route>
          <Route path={CREATE_QUOTE_PATH} element={<Landing />} />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          <Route path={LOGIN_PATH} element={<Login />} />
          <Route path={LOGOUT_PATH} element={<Logout />} />
          <Route path={SIGNUP_PATH} element={<SignUp />} />
          <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />
          <Route path={RESET_PASSWORD_PATH} element={<ResetPassword />} />
          <Route
            path="*"
            element={<Navigate to={`${CREATE_QUOTE_PATH}?zipcode=80014&name=John`} replace />}
          />
        </Routes>
        <ToastContainer limit={1} autoClose={3000} />
      </Suspense>
    </Providers>
  );
}

export default App;
