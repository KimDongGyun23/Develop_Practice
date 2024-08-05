import { create } from 'zustand';

interface MessageState {
  category: string;
  actions: {
    setCategoryToChatting: () => void;
    setCategoryToChanging: () => void;
    setCategoryToUpCycle: () => void;
  };
}

const useMessageStore = create<MessageState>((set) => ({
  category: 'chatting',
  actions: {
    setCategoryToChatting: () => set(() => ({ category: 'chatting' })),
    setCategoryToChanging: () => set(() => ({ category: 'changing' })),
    setCategoryToUpCycle: () => set(() => ({ category: 'upcycle' })),
  },
}));

export const useCategory = () => useMessageStore((state) => state.category);
export const useMessageActions = () =>
  useMessageStore((state) => state.actions);
