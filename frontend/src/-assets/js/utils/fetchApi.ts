/**
 * fetch APIの ラッパー
 */

type Props = {
  url: string
  init?: RequestInit
  debug?: boolean
}

export function fetchApi<T>({
  url,
  init = {},
  debug = false,
}: Props): Promise<{ data: T | null; errorStatus: number | null; isNetWorkErr: boolean }> {
  return fetch(url, init)
    .then((response) => {
      if (debug) {
        console.log('[ok]: ' + response.ok, '[status]: ' + response.status, '[text]: ' + response.statusText)
      }
      const isSuccess = [200, 204, 304].some((n) => n === response.status)
      if (!response.ok || !isSuccess) {
        throw new ResponseError('Bad fetch Error', response)
      }
      return response.json()
    })
    .then((data: T) => {
      return {
        data,
        isNetWorkErr: false,
        errorStatus: null,
      }
    })
    .catch((e: unknown) => {
      if (e instanceof ResponseError) {
        return {
          data: null,
          isNetWorkErr: false,
          errorStatus: e.response.status,
        }
      }
      return {
        data: null,
        isNetWorkErr: true,
        errorStatus: null,
      }
    })
}

/**
 * ErrorClassの拡張
 */

export class ResponseError extends Error {
  response: any
  constructor(message: string, res: any) {
    super(message)
    this.response = res
    this.name = 'ResponseError'
  }
}
