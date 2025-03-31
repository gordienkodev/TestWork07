import { create } from 'zustand'
import { TSearchHistoryState } from '../types/types'

export const useSearchHistory = create<TSearchHistoryState>((set, get) => ({
  history: [],
  addSearch: city =>
    set(state => {
      const updatedHistory = [city, ...state.history].slice(0, 10)
      return { history: updatedHistory }
    }),
  getCityForecast: (name, country) => {
    const state = get()
    return state.history.find(city => city.name === name && city.country === country)
  },
}))
