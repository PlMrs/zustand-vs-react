import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface PokeState {
    pokemon: any;
    index: number;
}

export const initialState: PokeState = {
    pokemon: undefined,
    index: 1
}

export const setPokemon = createAsyncThunk(
    'poke/fetchPokemon',
    async (index: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await response.json();
        return data;
    }
)

export const pokeSlice = createSlice({
    name: 'poke',
    initialState,
    reducers: {
        increaseIndex: (state) => {
            state.index += 1;
        },
        decreaseIndex: (state) => {
            state.index -= 1;
        },
        changeName: (state, action) => {
            if(!state.pokemon || !action.payload) return;
            state.pokemon.species.name = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setPokemon.fulfilled, (state, action) => {
            state.pokemon = action.payload;
        })
    }
})