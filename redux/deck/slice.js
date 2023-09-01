import { createSlice } from "@reduxjs/toolkit";

import data from "../../utils/dataDeckObject"

const initialState = {
    decks: data
};

const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        createDeck: (state, action) => {
            state.decks.push(action.payload);
        }
    }
});

export const { createDeck } = deckSlice.actions;
export default deckSlice.reducer;