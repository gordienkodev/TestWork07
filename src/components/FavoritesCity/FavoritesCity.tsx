'use client'
import { IFavoritesCityProps } from '@/types/types'
import { CityCard } from '../CityCard/CityCard'
import styles from './FavoritesCity.module.scss'

export const FavoritesCity = ({ favoriteCities }: IFavoritesCityProps) => {
  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-4 rounded shadow-lg`}
    >
      <h2 className="fs-4 mb-4">Favorite Cities</h2>
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {favoriteCities.length === 0 ? (
          <p>No favorite cities found</p>
        ) : (
          favoriteCities.map((city, index) => <CityCard key={index} city={city} />)
        )}
      </div>
    </div>
  )
}
