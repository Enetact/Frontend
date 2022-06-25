import { toast } from 'react-toastify';
import storage, { USER_STORAGE_KEY } from '@/utils/storage';

export enum Method {
  Get = 'get',
  Put = 'put',
  Post = 'post',
}

export const getHeaderInfo = async function (): Promise<HeadersInit> {
  let data: any = await storage.getItem(USER_STORAGE_KEY);
  return {
    'Content-Type': 'application/json',
    ...(data && data.tokens ? { Authorization: `Bearer ${data.tokens?.access?.token}` } : {}),
  };
};

/**
 * JSON api fetcher
 * @param url resource url
 * @param data object including header, body, method
 * @returns json data
 */
export const fetcher = async (
  url: string,
  data: {
    headers?: HeadersInit;
    method?: Method;
    body?: any;
  } = {},
) => {
  const { method = Method.Get, headers: _headers, body: _body } = data;
  const headers = { ...(await getHeaderInfo()), ..._headers };
  const body = _body ? JSON.stringify(_body) : undefined;

  return await fetch(url, { method, headers, body })
    .then(async (res: Response) => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      return data;
    })
    .catch(err => {
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
      });
      throw Error(err);
    });
};
