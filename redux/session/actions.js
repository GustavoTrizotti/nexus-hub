import SessionActionTypes from "./action-types";

export const createSession = (payload) => ({
    type: SessionActionTypes.CREATE,
    payload,
})