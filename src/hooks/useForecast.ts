'use client'
import { useState } from 'react'
import axios from 'axios'
import { IApiResponse, ICity, TForecastType } from '@/types/types'

const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const UNITS = 'metric'
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export const useForecast = () => {
  const [forecast, setForecast] = useState<TForecastType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchForecast = async (city: ICity) => {
    try {
      setLoading(true)
      setError(null)

      const { data } = await axios.get<IApiResponse>(FORECAST_API_URL, {
        params: {
          lat: city.lat,
          lon: city.lon,
          units: UNITS,
          appid: API_KEY,
        },
      })

      setForecast({
        name: data.city.name,
        country: data.city.country,
        list: data.list.slice(0, 40),
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return { forecast, loading, error, fetchForecast }
}
