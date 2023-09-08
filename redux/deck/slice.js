import { createSlice } from "@reduxjs/toolkit";

import data from "../../utils/dataDeckObject"

const initialState = data;

const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        addDeck: (state, action) => {
            state.decks.push(action.payload);
            console.log("State Uploaded!");
        },
        removeDeck: (state, action) => {
            
        }
    }
});

export const { addDeck } = deckSlice.actions;
export default deckSlice.reducer;