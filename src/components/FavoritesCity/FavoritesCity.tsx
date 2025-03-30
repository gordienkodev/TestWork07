import { mockFavoritesCity } from '../CityWeather/data'
import styles from './FavoritesCity.module.scss'

export const FavoritesCity = () => {
  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-4 rounded shadow-lg`}
    >
      <h2 className="fs-4 mb-4">Favorite Cities</h2>
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {mockFavoritesCity.list.map((city, index) => (
          <div
            key={index}
            className={`${styles.city_card} d-flex flex-column align-items-center p-3 rounded shadow-sm`}
          >
            <div className="d-flex align-items-baseline gap-2">
              <h3 className="fs-5 mb-0">{city.name}</h3>
              <span className="fs-6 text-muted">({city.country})</span>
            </div>
            <div className="mt-2">
              <p className="fs-4 mb-0">{city.temp}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
