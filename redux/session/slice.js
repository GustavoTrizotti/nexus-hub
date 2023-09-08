import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sessions: "parapo"
}

const subjectSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        createSession: (state, action) => {
            state.sessions.push(action.payload)
        }
    }
});

export const { createSession } = subjectSlice.actions;
export default subjectSlice.reducer;
