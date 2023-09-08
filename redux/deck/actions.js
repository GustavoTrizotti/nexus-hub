import DeckActionTypes from "./action-type";

export const createDeck = (payload) => ({
    type: DeckActionTypes.CREATE,
    payload,
})

