// import {createAction} from 'redux-actions';
import {CHANGED_BOOKS, SET_EDIT_BOOK} from "../consts/actionTypeConsts";
import {getItem, setItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

// export const showAlert = createAction(SHOW_ALERT);

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

export function editBook(book) {
    const booksArr = getItem(books) || [];
    const bookIndex = booksArr.findIndex((el) => {
        return el.id === book.id;
    });
    booksArr[bookIndex] = book;
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOKS,
        payload: booksArr
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

export function setEditBook(bookId) {
    const booksArr = getItem(books) || [];
    const book = booksArr.find((el) => {
        return el.id === bookId;
    });
    return {
        type: SET_EDIT_BOOK,
        payload: book
    };
}

