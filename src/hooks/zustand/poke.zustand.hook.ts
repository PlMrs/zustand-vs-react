import { produce } from "immer";
import { create } from "zustand";

export type TUsePokemon = {
    pokemon: any;
    index: number;
    setPokemon: () => Promise<void>;
    increaseIndex: () => void;
    decreaseIndex: () => void;
    changeName: (name?: string) => void;
    changeNameImmer: (name?: string) => void;
}

export const usePokemon = create<TUsePokemon>((set,get) => ({
    pokemon: undefined,
    index: 1,
    setPokemon: async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${get().index}`);
        const data = await response.json();
        set({ pokemon: data });
    },
    increaseIndex: () => set((state) => ({ index: state.index + 1 })),
    decreaseIndex: () => set((state) => ({ index: state.index - 1 })),
    changeName: (name?: string) => set(state => {
        if(!get().pokemon || !name) return state;
        return {
            pokemon: {
                ...state.pokemon,
                species: {
                    ...state.pokemon.species,
                    name
                }
            }
        }
    }),
    // Possibilité d'utiliser Immer pour éviter de faire des copies profondes (c'est built in dans Redux Toolkit)
    // Un middleware existe pour immer dans zustand
    // Ici on utilise directement immer dans le cas ou cette intervention est ponctuelle
    changeNameImmer: (name?: string) => set(state => {
        if(!get().pokemon || !name) return state;
        return produce(state, (draft) => { draft.pokemon.species.name = name })
    })
    
}));