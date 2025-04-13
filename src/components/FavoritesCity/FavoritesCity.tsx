'use client'

import { IFavoritesCityProps } from '@/types/types'
import { CityCard } from '../CityCard/CityCard'
import styles from './FavoritesCity.module.scss'

export const FavoritesCity = ({ favoriteCities }: IFavoritesCityProps) => {
  return (
    <div className={styles.custom_styles}>
      <h2>Favorite Cities</h2>
      <div className={styles['favorites-container']}>
        {favoriteCities.length === 0 ? (
          <p>No favorite cities found</p>
        ) : (
          favoriteCities.map((city, index) => <CityCard key={index} city={city} />)
        )}
      </div>
    </div>
  )
}
