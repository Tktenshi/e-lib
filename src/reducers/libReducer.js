import {CHANGED_BOOKS, SET_EDIT_BOOK} from "../consts/actionTypeConsts";

const initionalState = {
    currentBook: {}
};

export function libReducer(state = initionalState, action) {
    switch (action.type) {
        case CHANGED_BOOKS:
            return {
                ...state,
                books: action.payload,
                currentBook: {}
            };
        case SET_EDIT_BOOK:
            return {
                ...state,
                currentBook: action.payload
            };
        default:
            return state;
    }
}