'use client'
import { useWeather } from '../../hooks/useWeather'
import styles from './CityWeather.module.scss'

export const CityWeather = () => {
  const { weather, loading, error } = useWeather()
  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-5 rounded shadow-lg`}
    >
      <h2>{weather?.city?.name || 'Unknown city'}</h2>

      {loading && <p>loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <h3>{Math.round(weather?.list[0]?.main?.temp)}°C</h3>}
    </div>
  )
}
