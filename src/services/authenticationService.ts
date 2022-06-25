import { ENDPOINTS } from '@/utils/constants';
import { fetcher } from '@/utils/api';
import {
  getAccessToken,
  getRefreshToken,
  setUser,
  setTokens,
  removeTokens,
} from './localStorage';

export type EmailPayload = {
  email: string;
};

export type PasswordPayload = {
  password: string;
};

export type LoginPayload = EmailPayload & PasswordPayload;

export type SignupPayload = LoginPayload & {
  firstName: string;
  lastName: string;
};

const handleAuthentication = (result: any) => {
  if (result.ok) {
    setUser(result.data.user);
    setTokens(result.data.tokens);
  } else {
    throw new Error(result.error);
  }

  return true;
};

const refreshAuthentication = async () => {
  const refreshToken = getRefreshToken();

  if (refreshToken) {
    const result = await fetcher(ENDPOINTS.AUTH_REFRESH, { body: { refreshToken } });

    return handleAuthentication(result);
  }

  return false;
};

export const login = async (data: LoginPayload): Promise<boolean> => {
  const result = await fetcher(ENDPOINTS.AUTH_LOGIN, { body: data });

  return handleAuthentication(result);
};

export const forgotPassword = async (data: EmailPayload): Promise<boolean> => {
  const result = await fetcher(ENDPOINTS.AUTH_FORGOT_PASSWORD, { body: data });

  return result.ok;
};

export const signup = async () => {
  //
};

export const isAuthenticated = async (): Promise<boolean> => {
  // If we have a valid access token, then we have auth
  if (getAccessToken()) {
    return true;
  }

  // If we do not have a valid refresh token, we cannot refresh auth
  if (!getRefreshToken) {
    return false;
  }

  // If refresh token is valid, we have auth. If not, clear all tokens so we log in.
  try {
    return refreshAuthentication();
  } catch (err: unknown) {
    removeTokens();

    return false;
  }
};
