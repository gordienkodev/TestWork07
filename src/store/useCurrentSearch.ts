import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type City = {
  name: string
  country: string
  lat: number
  lon: number
}

type CurrentSearchState = {
  currentSearch: City | null
  setCurrentSearch: (city: City) => void
}

export const useCurrentSearch = create<CurrentSearchState>()(
  devtools(
    set => ({
      currentSearch: null,
      setCurrentSearch: city => set({ currentSearch: city }),
    }),
    { name: 'CurrentSearchStore' }
  )
)
