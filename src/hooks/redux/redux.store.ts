import { configureStore } from "@reduxjs/toolkit";

import { counterSlice } from "./counter.redux.slice";
import { pokeSlice } from "./poke.redux.slice";

export const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      poke: pokeSlice.reducer
    },
});