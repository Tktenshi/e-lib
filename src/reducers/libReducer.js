import {CHANGED_BOOKS, SET_EDIT_BOOK, SHOW_ALERT, FILTER_SORT_BOOKS} from "../consts/actionTypeConsts";

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
        case FILTER_SORT_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        case SHOW_ALERT:
            return {
                ...state,
                alertData: action.payload,
            };
        default:
            return state;
    }
}