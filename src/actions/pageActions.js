// import {createAction} from 'redux-actions';
import {CHANGED_BOOKS, SET_EDIT_BOOK} from "../consts/actionTypeConsts";
import {getItem, setItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";

// export const createBook = createAction(CREATED_BOOK);
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

export function createBook(book) {
    const booksArr = getItem(books) || [];
    book.id = generateId();
    booksArr.push(book);
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOKS,
        payload: booksArr
    };
}

export function editBook(bookId) {
    const booksArr = getItem(books) || [];
    const book = booksArr.find((el) => {
        return el.id === bookId;
    });
    console.log(book);
    return {
        type: SET_EDIT_BOOK,
        payload: book
    };
}

export function deleteBook(bookId) {
    const booksArr = getItem(books) || [];
    booksArr.splice(booksArr.findIndex((el) => {
        return el.id === bookId;
    }), 1);
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOKS,
        payload: booksArr
    };
}

