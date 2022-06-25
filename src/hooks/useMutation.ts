import type { UseMutationOptions } from 'react-query';
import { useMutation as useOriginalMutation } from 'react-query';
import { Method, fetcher } from '@/utils/api';

type MutationOptions = {
  method?: Method;
  body?: any;
  headers?: any;
  qid?: (string | Record<string, any>)[];
} & UseMutationOptions<any, any, any, any>;
type Transformer = null | ((data: unknown) => unknown);
export default function useMutation(
  url: string,
  options: MutationOptions = {},
  transform: Transformer = d => d,
) {
  const { qid = '', method = Method.Post, headers, ...rest } = options;
  return useOriginalMutation(
    [url, qid].filter(Boolean),
    (body: any) => fetcher(url, { method, body, headers }).then(transform),
    rest,
  );
}
