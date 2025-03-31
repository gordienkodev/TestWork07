'use client'
import { useState } from 'react'

const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const UNITS = 'metric'
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY

export type forecastType = {
  name: string
  country: string
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        },
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    },
  ]
  sunrise: number
  sunset: number
}

export type optionType = {
  name: string
  country: string
  lat: number
  lon: number
}

export const useForecast = () => {
  const [forecast, setForecast] = useState<forecastType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchForecast = async (city: optionType) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(
        `${FORECAST_API_URL}?lat=${city.lat}&lon=${city.lon}&units=${UNITS}&appid=${API_KEY}`
      )
      if (!response.ok) throw new Error('Error fetching forecast')
      const data = await response.json()
      setForecast({
        ...data.city,
        list: data.list.slice(0, 16),
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return { forecast, loading, error, fetchForecast }
}
