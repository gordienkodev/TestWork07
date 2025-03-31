import { create } from 'zustand'

type City = {
  name: string
  country: string
  lat: number
  lon: number
  forecast?: forecastType
}

export type forecastType = {
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

type SearchHistoryState = {
  history: City[]
  addSearch: (city: City) => void
  getCityForecast: (name: string, country: string) => City | undefined
}

export const useSearchHistory = create<SearchHistoryState>((set, get) => ({
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
