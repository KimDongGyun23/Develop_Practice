import { create } from 'zustand'

type SectionType = 'personal' | 'notification' | 'location'

interface Actions {
  handleCheckClick: (section: SectionType) => void
  handleAllCheckClick: () => void
}

interface CheckListStore {
  checkList: { personal: boolean; notification: boolean; location: boolean }
  isAllChecked: boolean
  actions: Actions
}

const initialCheckList = { personal: false, notification: false, location: false }

export const useCheckListStore = create<CheckListStore>((set, get) => ({
  checkList: initialCheckList,
  isAllChecked: false,
  actions: {
    handleCheckClick: (section: SectionType) => {
      const { checkList } = get()
      const newCheckList = { ...checkList, [section]: !checkList[section] }
      const allChecked = Object.values(newCheckList).every((value) => value === true)

      set(() => ({ checkList: newCheckList, isAllChecked: allChecked }))
    },

    handleAllCheckClick: () => {
      const { isAllChecked } = get()
      const allChecked = { personal: true, notification: true, location: true }

      if (isAllChecked) set({ checkList: initialCheckList, isAllChecked: false })
      else set({ checkList: allChecked, isAllChecked: true })
    },
  },
}))

export const useCheckList = () => useCheckListStore((state) => state.checkList)
export const useAllChecked = () => useCheckListStore((state) => state.isAllChecked)
export const useCheckListActions = () => useCheckListStore((state) => state.actions)
