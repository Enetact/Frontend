import { isPast, isFuture } from 'date-fns';
import { useAuthContext } from '@/context/AuthContext';
import { ENDPOINTS } from '@/utils/constants';
import useMutation from '@/hooks/useMutation';
import useRouteChange from '@/hooks/useRouteChange';

/**
 * refresh expired access token when route changes.
 */
export default function useRefreshTokens() {
  const { tokens, logout, updateTokens } = useAuthContext();
  const refresh = useMutation(ENDPOINTS.SIGNUP);

  useRouteChange(() => {
    if (tokens) {
      const accessTokenExpired =
        !tokens.access.expire || isPast(new Date(tokens.access.expire));
      const refreshTokenValid =
        tokens.refresh.expire && isFuture(new Date(tokens.refresh.expire));
      if (accessTokenExpired) {
        if (refreshTokenValid) {
          // refresh token
          refresh.mutateAsync({ refreshToken: tokens.refresh.token }).then(res => {
            updateTokens(res);
          });
        } else {
          logout();
        }
      }
    }
  });
}
