import { create } from 'zustand'

interface Actions {
  handleDecimalWeightChange: (selected: string | number) => void
  handleIntegerWeightChange: (selected: string | number) => void
  getFormattedWeight: () => string
  resetWeights: () => void
}

interface WeightStore {
  weights: [number, number]
  actions: Actions
}

const initialWeights: [number, number] = [0, 0]

export const useWeightStore = create<WeightStore>((set, get) => ({
  weights: initialWeights,
  actions: {
    handleIntegerWeightChange: (selected) =>
      set((state) => ({
        weights: [Number(selected), state.weights[1]],
      })),
    handleDecimalWeightChange: (selected) =>
      set((state) => ({
        weights: [state.weights[0], Number(selected)],
      })),
    getFormattedWeight: () => {
      const [integerPart, decimalPart] = get().weights
      return `${integerPart}.${decimalPart}`
    },
    resetWeights: () =>
      set(() => ({
        weights: initialWeights,
      })),
  },
}))

export const useWeights = () => useWeightStore((state) => state.weights)
export const useWeightActions = () => useWeightStore((state) => state.actions)
