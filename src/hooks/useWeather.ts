import { useEffect, useState } from 'react'
import { useWeatherStore } from '../store/useWeatherStore'

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const UNITS = 'metric'

interface WeatherData {
  city: {
    name: string
  }
  list: {
    main: {
      temp: number
    }
  }[]
}

export const useWeather = () => {
  const { city } = useWeatherStore()
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return

      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${FORECAST_API_URL}?lat=${city.lat}&lon=${city.lon}&units=${UNITS}&appid=${API_KEY}`
        )
        if (!response.ok) throw new Error('Weather loading error')
        const data = await response.json()
        setWeather(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return { weather, loading, error }
}
