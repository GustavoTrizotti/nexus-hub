import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/dataSubjectObject";

const initialState = data;

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    createSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
  },
});

export const { createSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
