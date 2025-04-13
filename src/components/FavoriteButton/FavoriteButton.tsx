'use client'

import { useFavorites } from '@/store/useFavorites'
import { IFavoriteButtonProps } from '@/types/types'
import styles from './FavoriteButton.module.scss'

export const FavoriteButton = ({ selectedCity }: IFavoriteButtonProps) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

  const isFavorite = favorites.some(
    favorite => favorite.lat === selectedCity?.lat && favorite.lon === selectedCity?.lon
  )

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(selectedCity)
    } else {
      addToFavorites(selectedCity)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.favorite_button} ${isFavorite ? styles.active : ''}`}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  )
}
