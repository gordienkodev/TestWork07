'use client'

import { useRouter } from 'next/navigation'
import { ICityWeatherProps } from '@/types/types'
import styles from './CityWeather.module.scss'

export const CityWeather = ({ forecast, selectedCity }: ICityWeatherProps) => {
  const currentWeather = forecast.list[0]
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/forecast`)
  }

  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-5 rounded shadow-lg`}
      onClick={handleCardClick}
    >
      <h2>
        {selectedCity?.name}, {selectedCity?.country}
      </h2>

      {!currentWeather && <p>Loading...</p>}

      {currentWeather && (
        <>
          <h3>{Math.round(currentWeather.main.temp)}°C</h3>
          <p>{currentWeather.weather[0]?.description || 'No description available'}</p>
          <p>Feels like: {Math.round(currentWeather.main.feels_like)}°C</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Wind: {Math.round(currentWeather.wind.speed)} m/s</p>
        </>
      )}
    </div>
  )
}
