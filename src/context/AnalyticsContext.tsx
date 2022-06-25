import type { AnalyticsInstance } from 'analytics';
import { createContext, useContext, useCallback, useState } from 'react';
import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import useRouteChange from '@/hooks/useRouteChange';

const AnalyticsContext = createContext<AnalyticsInstance | null>(null);

export const AnalyticsProvider = ({ children }: any) => {
  const [analytics] = useState(() => {
    const containerId = 'GTM-MQW5X8Q';
    return Analytics({
      app: 'mu',
      plugins: [
        googleTagManager({
          containerId,
        }),
      ],
    });
  });
  const handleRouteChange = useCallback(location => {
    analytics.page(location);
  }, []);

  // page change
  useRouteChange(handleRouteChange);

  return <AnalyticsContext.Provider value={analytics}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = () => {
  const analytics = useContext(AnalyticsContext);
  return analytics as AnalyticsInstance;
};
