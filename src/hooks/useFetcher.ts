import type { UseQueryOptions, UseQueryResult } from 'react-query';
import { useQuery } from 'react-query';
import { Method, fetcher } from '@/utils/api';

type UseFetcherOptions = {
  method?: Method;
  body?: any;
  headers?: any;
  qid?: (string | Record<string, any>)[];
} & Omit<
  UseQueryOptions<any, any, any, any>, // TODO:: update with generic type
  'queryKey' | 'queryFn'
>;
type UseFetcherTransformer = null | ((data: unknown) => unknown);
export default function useFetcher<T = any>(
  url: string,
  options: UseFetcherOptions = {},
  transform: UseFetcherTransformer = d => d,
): UseQueryResult<T, any> {
  const { qid, method = Method.Get, body, headers, ...rest } = options;
  return useQuery(
    [url, qid].filter(Boolean),
    () => fetcher(url, { method, body, headers }).then(transform),
    rest,
  );
}
