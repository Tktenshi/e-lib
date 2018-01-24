import {createAction} from 'redux-actions';
import {CHANGED_BOOK} from "../consts/actionTypeConsts";
import {getItem, setItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";

// export const createBook = createAction(CREATED_BOOK);

export function createBook(book) {
    const booksArr = getItem(books) || [];
    booksArr.push(book);
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOK,
        payload: booksArr
    };
}

export function deleteBook(book) {
    const booksArr = getItem(books) || [];
    booksArr.push(book);
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOK,
        payload: booksArr
    };
}