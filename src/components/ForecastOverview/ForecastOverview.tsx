'use client'

import styles from './ForecastOverview.module.scss'

export type ForecastType = {
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

type City = {
  name: string
  country: string
  lat: number
  lon: number
}

interface ForecastOverviewProps {
  forecast: ForecastType
  currentSearch: City
}

export const ForecastOverview = ({ forecast, currentSearch }: ForecastOverviewProps) => {
  if (!forecast) {
    return <div>No data available</div>
  }

  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-4 rounded shadow-lg`}
    >
      <h2 className="fs-4">
        {currentSearch?.name}, {currentSearch?.country}
      </h2>
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {forecast?.list.slice(0, 6).map((forecastItem, index) => {
          const date = new Date(forecastItem.dt * 1000)
          return (
            <div
              key={index}
              className={`d-flex flex-column align-items-center p-1 rounded shadow-sm`}
            >
              <h5 className="fs-6">{date.toLocaleDateString()}</h5>
              <h3 className="fs-5">{Math.round(forecastItem.main.temp)}°C</h3>
              <h6 className="fs-6">{forecastItem.weather[0]?.description}</h6>
              <div className="d-flex gap-1 flex-column align-items-center">
                <div>
                  <span className="fs-6">Feels Like</span>
                  <p className="fs-6">{Math.round(forecastItem.main.feels_like)}°C</p>
                </div>
                <div>
                  <span className="fs-6">Humidity</span>
                  <p className="fs-6">{forecastItem.main.humidity}%</p>
                </div>
                <div>
                  <span className="fs-6">Wind Speed</span>
                  <p className="fs-6">{Math.round(forecastItem.wind.speed)} m/s</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
