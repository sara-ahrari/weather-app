interface WeatherInfo {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface CurrentWeatherResponse {
  name: string
  main: WeatherInfo
}

export interface WeatherForecastResponse {}
