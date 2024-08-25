import { create } from 'zustand'

interface Actions {
  handleTensWeightChange: (selected: string | number) => void
  handleOnesWeightChange: (selected: string | number) => void
  handleDecimalWeightChange: (selected: string | number) => void
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
    handleTensWeightChange: (selected) =>
      set((state) => ({
        weights: [Number(selected) * 10 + (state.weights[0] % 10), state.weights[1]],
      })),
    handleOnesWeightChange: (selected) =>
      set((state) => ({
        weights: [Math.floor(state.weights[0] / 10) * 10 + Number(selected), state.weights[1]],
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
