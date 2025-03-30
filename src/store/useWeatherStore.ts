import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface City {
  name: string
  lat: number
  lon: number
}

interface WeatherStore {
  city: City
  setCity: (city: City) => void
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    set => ({
      city: { name: 'Amsterdam', lat: 52.3727598, lon: 4.8936041 },
      setCity: city => set({ city }),
    }),
    {
      name: 'weather-city',
    }
  )
)
