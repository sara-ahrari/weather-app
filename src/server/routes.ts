import * as express from "express"
import fetch from "node-fetch"
import { getStringQueryParam, getUrlByType } from "./utils"

const apiKey = process.env.API_KEY

if (!apiKey) {
  throw new Error("Missing Open Weather API key")
}

const weatherUrl = "https://api.openweathermap.org/data/2.5"
// const locationUrl = 

const router = express.Router()

router.get("/weather", async (req, res) => {
  try {
    const city = getStringQueryParam(req, "city")
    const type = getStringQueryParam(req, "type")
    if (!city || !type) {
      return new Error("Parameters latitude and city and type are required")
    }

    const params = new URLSearchParams({
      q: city,
      appid: apiKey,
      units: "metric",
    })

    const url = getUrlByType(weatherUrl, type)
    const response = await fetch(`${url}?${params.toString()}`)
    const data = await response.json()
    return res.json(data)

  } catch (error) {
    res.json({ error })
  }
})

export default router
