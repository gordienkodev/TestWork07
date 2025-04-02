import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TSearchHistoryState } from '../types/types'

export const useSearchHistory = create<TSearchHistoryState>()(
  devtools(
    (set, get) => ({
      history: [],

      addSearch: city =>
        set(
          state => {
            const existingIndex = state.history.findIndex(
              c => c.name === city.name && c.country === city.country
            )

            const newHistory = [...state.history]

            if (existingIndex !== -1) {
              newHistory[existingIndex] = city
            } else {
              newHistory.unshift(city)
            }

            return { history: newHistory.slice(0, 10) }
          },
          false,
          'addSearch'
        ),

      getCityForecast: (name, country) => {
        return get().history.find(c => c.name === name && c.country === country)
      },
    }),
    {
      name: 'SearchHistoryStore',
      enabled: process.env.NODE_ENV !== 'production',
    }
  )
)
