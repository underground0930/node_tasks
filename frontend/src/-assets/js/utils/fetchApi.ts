/**
 * fetch APIの ラッパー
 */

type Props = {
  url: string;
  init: RequestInit;
  debug?: boolean;
};

export function fetchApi<T>({
  url,
  init,
  debug = false,
}: Props): Promise<{ data: T | null; fetchError: string | null }> {
  return fetch(url, init)
    .then((response) => {
      if (debug) {
        console.log(
          '[ok]: ' + response.ok,
          '[status]: ' + response.status,
          '[text]: ' + response.statusText
        );
      }
      if (!response.ok || response.status === 0) {
        throw new Error(response.statusText); // 0, 400, 500 errors
      }
      return response.json();
    })
    .then((data: T) => {
      return {
        data: data,
        fetchError: null,
      };
    })
    .catch((e: { message: string }) => {
      return {
        data: null,
        fetchError: e.message,
      };
    });
}
