import type { TProvider } from '@/types/common';

type ProviderData = TProvider | [TProvider, Record<string, any>];
export const combineProviders = (
  root: ProviderData,
  ...providers: ProviderData[]
): TProvider => {
  const [RootProvider, rootProps] = Array.isArray(root) ? root : [root, {}];

  return providers.reduce(
    (CombinedProviders: TProvider, provider: ProviderData) =>
      ({ children }) => {
        const [Provider, props] = Array.isArray(provider) ? provider : [provider, {}];
        return (
          <CombinedProviders>
            <Provider {...props}>{children}</Provider>
          </CombinedProviders>
        );
      },
    ({ children }) => <RootProvider {...rootProps}>{children}</RootProvider>,
  );
};
