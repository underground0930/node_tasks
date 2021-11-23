/**
 * fetch APIの ラッパー
 */

type Props = {
  url: string;
  init: RequestInit;
  debug?: boolean;
};

type ErrorStatus = 'SERVER_ERROR' | 'CLIENT_ERROR' | null;

export function fetchApi<T>({
  url,
  init,
  debug = false,
}: Props): Promise<{ data: T | null; errorStatus: ErrorStatus }> {
  return fetch(url, init)
    .then((response) => {
      if (debug) {
        console.log(
          '[ok]: ' + response.ok,
          '[status]: ' + response.status,
          '[text]: ' + response.statusText
        );
      }
      const isSuccess = [200, 204, 304].some((n) => n === response.status);
      if (!response.ok || !isSuccess) {
        throw new Error(String(response.status)); // 0, 400, 500 errors
      }
      return response.json();
    })
    .then((data: T) => {
      return {
        data,
        errorStatus: null,
      };
    })
    .catch((e) => {
      return {
        data: null,
        errorStatus: e[0] === '5' ? 'SERVER_ERROR' : 'CLIENT_ERROR',
      };
    });
}
