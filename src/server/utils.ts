import { Request } from "express"

export function getStringQueryParam(req: Request, paramName: string): string {
  const paramValue = req.query[paramName]
  if (!paramValue) {
    throw new Error(`Missing required parameter ${paramName}`)
  }
  if (typeof paramValue !== "string") {
    throw new Error(`Expected parameter ${paramName} to be a string`)
  }
  return paramValue
}

export function getUrlByType(url: string, type: string): string {
  switch (type) {
    case "current":
      return `${url}/weather`
    case "forecast":
      return `${url}/forecast`
    default:
      throw new Error(`Unknown type ${type}`)
  }
}
