import { mockForecast, mockForecastList } from './data'
import styles from './CityWeather.module.scss'

export const CityWeather = () => {
  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-5 rounded shadow-lg`}
    >
      <h2>
        {mockForecast?.name}: {mockForecast?.country}
      </h2>
      <h3>{Math.round(mockForecastList?.list[0]?.main?.temp)}°C</h3>
    </div>
  )
}
