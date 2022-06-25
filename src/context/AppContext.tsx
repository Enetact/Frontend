import { assertHookWithinProvider } from '@/utils/helper';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useMemo, useState, useCallback } from 'react';

type AppContextValue = {
  quotePayload: Record<string, any>;
  setQuotePayload: Dispatch<SetStateAction<AppContextValue['quotePayload']>>;
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<AppContextValue['tabIndex']>>;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC = ({ children }) => {
  const [quotePayload, setQuotePayload] = useState<AppContextValue['quotePayload'] | null>(
    null,
  );

  const [tabIndex, setTabIndex] = useState(0);

  const persistQuotePayload = useCallback((data: any) => {
    setQuotePayload(p => ({ ...p, ...data }));
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      quotePayload: quotePayload!,
      setQuotePayload: persistQuotePayload,
      tabIndex,
      setTabIndex,
    }),
    [quotePayload, persistQuotePayload, tabIndex],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const data = useContext(AppContext);
  assertHookWithinProvider<AppContextValue>(data);
  return data;
};

export default AppContext;
