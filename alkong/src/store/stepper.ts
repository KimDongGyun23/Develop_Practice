import { create } from 'zustand'

interface Actions {
  setInitialCount: (init: number) => void
  handleDecrease: () => void
  handleIncrease: () => void
}

interface StepperStore {
  count: number
  actions: Actions
}

export const useStepperStore = create<StepperStore>((set) => ({
  count: 0,
  actions: {
    setInitialCount: (init: number) => {
      set(() => ({ count: init }))
    },
    handleDecrease: () => {
      set((state) => ({ count: state.count - 1 }))
    },

    handleIncrease: () => {
      set((state) => ({ count: state.count + 1 }))
    },
  },
}))

export const useStepperCount = () => useStepperStore((state) => state.count)
export const useStepperActions = () => useStepperStore((state) => state.actions)
