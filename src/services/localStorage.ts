const USER = 'user';
const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export const setUser = (user: any) => localStorage.setItem(USER, JSON.stringify(user));

export const setTokens = (tokens: any) => {
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(tokens.access));
  localStorage.setItem(REFRESH_TOKEN, JSON.stringify(tokens.refresh));
};

export const removeUser = () => localStorage.removeItem(USER);

export const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

const getItem = (key: string): Record<any, any> | undefined => {
  const item = localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
};

const getToken = (key: string): Record<any, any> | undefined => {
  const token = getItem(key);
  if (!token) {
    return;
  }

  const expiresAt = new Date(token.expires);
  if (expiresAt < new Date()) {
    // Token has expired
    return;
  }

  return token.token;
};

export const getUser = () => getItem(USER);

export const getAccessToken = () => getToken(ACCESS_TOKEN);

export const getRefreshToken = () => getToken(REFRESH_TOKEN);
