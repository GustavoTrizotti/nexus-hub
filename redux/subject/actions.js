import SubjectActionTypes from "./action-types";

export const createSubject = (payload) => ({
    type: SubjectActionTypes.CREATE,
    payload,
});