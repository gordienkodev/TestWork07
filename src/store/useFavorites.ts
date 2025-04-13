import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IFavoritesStore } from '@/types/types'

export const useFavorites = create<IFavoritesStore, [['zustand/persist', IFavoritesStore]]>(
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
