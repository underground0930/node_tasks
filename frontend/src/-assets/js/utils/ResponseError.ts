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
