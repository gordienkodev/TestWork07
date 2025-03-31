import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type City = {
  name: string
  country: string
  lat: number
  lon: number
}

interface FavoritesStore {
  favorites: City[]
  addToFavorites: (city: City) => void
  removeFromFavorites: (city: City) => void
}

export const useFavorites = create<FavoritesStore, [['zustand/persist', FavoritesStore]]>(
  persist(
    set => ({
      favorites: [],
      addToFavorites: city =>
        set(state => {
          const newFavorites = [...state.favorites, city]
          return { favorites: newFavorites }
        }),
      removeFromFavorites: city =>
        set(state => {
          const newFavorites = state.favorites.filter(
            favorite => favorite.lat !== city.lat || favorite.lon !== city.lon
          )
          return { favorites: newFavorites }
        }),
    }),
    {
      name: 'favorites-storage',
    }
  )
)
