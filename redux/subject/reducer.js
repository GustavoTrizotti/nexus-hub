import SubjectActionTypes from "./action-types";

const initialState = {
  subjects: [],
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SubjectActionTypes.CREATE:
      return { ...state, subjects: [...state.subjects, action.payload] };
    default:
      return state;
  }
};

export default subjectReducer;
