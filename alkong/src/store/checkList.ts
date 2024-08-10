import { create } from 'zustand'

const checkListObj = { personal: false, notification: false, location: false }
type CheckListKeys = keyof typeof checkListObj

interface CheckStore {
  checkedSections: CheckListKeys[]
  isAllChecked: boolean
  handleCheckClick: (section: CheckListKeys) => void
  handleAllCheckClick: () => void
}

export const useCheckStore = create<CheckStore>((set, get) => ({
  checkedSections: [],
  isAllChecked: false,

  handleCheckClick: (section: CheckListKeys) => {
    const { checkedSections } = get()
    const isChecked = checkedSections.includes(section)
    const updatedCheckedSections = isChecked
      ? checkedSections.filter((item) => item !== section)
      : [...checkedSections, section]

    set({ checkedSections: updatedCheckedSections })

    const allChecked = updatedCheckedSections.length === Object.keys(checkListObj).length
    set({ isAllChecked: allChecked })
  },

  handleAllCheckClick: () => {
    const { checkedSections } = get()
    const allSections = Object.keys(checkListObj) as CheckListKeys[]

    if (checkedSections.length === allSections.length) {
      set({ checkedSections: [], isAllChecked: false })
    } else {
      set({ checkedSections: allSections, isAllChecked: true })
    }
  },
}))
