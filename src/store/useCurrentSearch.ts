import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TCurrentSearchState } from '../types/types'

export const useCurrentSearch = create<TCurrentSearchState>()(
  devtools(
    set => ({
      currentSearch: null,
      setCurrentSearch: city => set({ currentSearch: city }),
    }),
    { name: 'CurrentSearchStore' }
  )
)
