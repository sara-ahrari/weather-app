import * as express from "express"
import fetch from "node-fetch"
import { getStringQueryParam, getUrlByType } from "./utils"
import { WeatherInfo } from "./model/types/currentweather"
import { ForecastWeatherInfo } from "./model/types/forecastweather"

const apiKey = process.env.API_KEY

if (!apiKey) {
  throw new Error("Missing Open Weather API key")
}

const weatherUrl = "https://api.openweathermap.org/data/2.5"

const router = express.Router()

router.get("/weather", async (req, res, next) => {
  try {
    const city = getStringQueryParam(req, "city")
    const type = getStringQueryParam(req, "type")
    if (!city || !type) {
      new Error("Parameters latitude and city and type are required")
    }

    const params = new URLSearchParams({
      q: city,
      appid: apiKey,
      units: "metric",
    })

    const url = getUrlByType(weatherUrl, type)

    if (type === "current") {
      const response = await fetch(`${url}?${params.toString()}`)
      const data: WeatherInfo = await response.json()
      return res.json({
        name: data.name,
        main: data.main,
        weather: data.weather,
      })
    } else if (type === "forecast") {
      const response = await fetch(`${url}?${params.toString()}`)
      const data: ForecastWeatherInfo = await response.json()
      return res.json({
        city: data.city,
        weatherInfo: data.list.map((item) => {
          return { main: item.main, weather: item.weather }
        }),
      })
    }
  } catch (error) {
    next(error)
  }
})

router.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(400).json({ error: err.message })
})

export default router
