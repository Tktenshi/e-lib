import {CHANGED_BOOK} from "../consts/actionTypeConsts";

const initionalState = {};

export function libReducer(state = initionalState, action) {
    switch (action.type) {
        case CHANGED_BOOK:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state;
    }
}