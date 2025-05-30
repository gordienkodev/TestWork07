'use client'

import { TDailyForecast, IForecastOverviewProps, TForecastType } from '@/types/types'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import Image from 'next/image'
import styles from './ForecastOverview.module.scss'

const groupForecastByDay = (forecastList: TForecastType['list']): TDailyForecast[] => {
  const dailyForecast = forecastList.reduce<Record<string, Omit<TDailyForecast, 'date'>>>(
    (acc, item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString()

      if (!acc[date]) {
        acc[date] = {
          temp: 0,
          feels_like: 0,
          humidity: 0,
          wind: 0,
          description: '',
          icon: item.weather[0]?.icon || '',
        }
      }

      const dayData = acc[date]

      dayData.temp += item.main.temp
      dayData.feels_like += item.main.feels_like
      dayData.humidity += item.main.humidity
      dayData.wind += item.wind.speed
      dayData.description = item.weather[0]?.description || dayData.description

      return acc
    },
    {}
  )

  return Object.entries(dailyForecast).map(([date, data]) => ({
    date,
    temp: Math.round(data.temp / 8),
    feels_like: Math.round(data.feels_like / 8),
    humidity: Math.round(data.humidity / 8),
    wind: Math.round(data.wind / 8),
    description: data.description,
    icon: data.icon,
  }))
}

export const ForecastOverview = ({ forecast, currentSearch }: IForecastOverviewProps) => {
  if (!forecast) {
    return <div>No data available</div>
  }

  const dailyForecast = groupForecastByDay(forecast.list).slice(0, 6)

  return (
    <div className={styles.custom_styles}>
      <h2>
        {currentSearch?.name}, {currentSearch?.country}
      </h2>

      <div className={styles.forecast_container}>
        {dailyForecast.map((day, index) => (
          <div key={index} className={styles.forecast_card}>
            <h5>{day.date}</h5>
            <Image
              src={`https://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.description}
              width={50}
              height={50}
            />
            <h3>{day.temp}°C</h3>
            <h6>{day.description}</h6>
            <div className={styles['d-flex']}>
              <div>
                <span>Humidity</span>
                <p>{day.humidity}%</p>
              </div>
              <div>
                <span>Wind Speed</span>
                <p>{day.wind} m/s</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FavoriteButton selectedCity={currentSearch} />
    </div>
  )
}
