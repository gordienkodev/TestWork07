'use client'

import { useFavorites } from '../../store/useFavorites'
import { optionType } from '../CityWeather/types'

interface FavoriteButtonProps {
  selectedCity: optionType
}

export const FavoriteButton = ({ selectedCity }: FavoriteButtonProps) => {
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
      className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-primary'}`}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  )
}
