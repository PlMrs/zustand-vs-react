import { create } from "zustand";

export type TUseCounter = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCounter = create<TUseCounter>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}));