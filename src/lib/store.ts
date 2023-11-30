import { create } from 'zustand'

interface RickAndMortyStore {
    bears: number
    increase: (by: number) => void
}

export const useRickAndMortyStore = create<RickAndMortyStore>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))
