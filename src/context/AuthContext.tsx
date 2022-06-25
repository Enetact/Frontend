import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useMutation from '@/hooks/useMutation';
import storage, { USER_STORAGE_KEY } from '@/utils/storage';
import { ENDPOINTS } from '@/utils/constants';
import { assertHookWithinProvider } from '@/utils/helper';
import { LOGIN_PATH, DASHBOARD_PATH } from '@/utils/paths';

type User = {
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

type Token = {
  token: string;
  expire: Date;
};

type Tokens = {
  access: Token;
  refresh: Token;
};

type AuthData = {
  user: User | null;
  tokens: Tokens | null;
  isLoggedIn: boolean;
};

type AuthContextValue<T = unknown> = {
  logout: () => void;
  login: (res: T) => Promise<unknown>;
  signup: (res: T) => Promise<unknown>;
  updateTokens: (tokens: Tokens | unknown) => void;
} & AuthData;

const isAuthData = (data: AuthData | any): data is AuthData => data.user && data.tokens;

export const isTokensData = (tokens: Tokens | any): tokens is Tokens =>
  tokens.access && tokens.refresh;

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const _login = useMutation(ENDPOINTS.LOGIN);
  const _signup = useMutation(ENDPOINTS.SIGNUP);
  const initialUserData = useMemo(() => ({ user: null, tokens: null, isLoggedIn: false }), []);
  const [userData, setUserData] = useState<AuthData>(initialUserData);

  useEffect(() => {
    storage.getItem(USER_STORAGE_KEY).then(value => {
      if (isAuthData(value)) setUserData({ ...value, isLoggedIn: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTokens = useCallback(async (tokens: unknown) => {
    if (isTokensData(tokens)) {
      const value = await storage.getItem(USER_STORAGE_KEY);
      if (tokens && isAuthData(value)) {
        const data = { ...value, tokens };
        await storage.setItem(USER_STORAGE_KEY, data);
        setUserData(data);
      }
    }
  }, []);

  const signup = useCallback(
    values => {
      const { firstName, lastName, email, password } = values;
      return _signup.mutateAsync({ firstName, lastName, email, password }).then(res => {
        if (isAuthData(res)) {
          toast.success('Registration successful! Log in now.', {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
          });
          navigate(LOGIN_PATH, { state: { email } });
        }
        return res;
      });
    },
    [_signup, navigate],
  );

  const login = useCallback(
    ({ email, password }) => {
      return _login.mutateAsync({ email, password }).then(res => {
        if (isAuthData(res)) {
          setUserData({ ...res, isLoggedIn: true });
          storage.setItem(USER_STORAGE_KEY, res);
          navigate(DASHBOARD_PATH);
        }
        return res;
      });
    },
    [_login, navigate],
  );

  const logout = useCallback(() => {
    storage.clear().finally(() => {
      setUserData(initialUserData);
      navigate(LOGIN_PATH);
    });
  }, [navigate, initialUserData]);

  const value = useMemo(
    () => ({ ...userData, signup, login, logout, updateTokens }),
    [userData, signup, login, logout, updateTokens],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const data = useContext(AuthContext);
  assertHookWithinProvider<AuthContextValue>(data);
  return data;
};

export default AuthContext;
