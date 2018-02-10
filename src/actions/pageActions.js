// import {createAction} from 'redux-actions';
import {CHANGED_BOOKS, SET_EDIT_BOOK, SHOW_ALERT, FILTER_SORT_BOOKS} from "../consts/actionTypeConsts";
import {getItem, setItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";
import "../utils/polyfill";

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);
let sortOption;
let filterText;

export function createBook(book) {
    const booksArr = getItem(books) || [];
    book.id = generateId();
    booksArr.push(book);
    setItem(books, booksArr);
    return {
        type: CHANGED_BOOKS,
        payload: sort(filter(booksArr))
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
        payload: sort(filter(booksArr))
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
        payload: sort(filter(booksArr))
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

export function filterBooks(filterT) {
    const booksArr = getItem(books) || [];
    filterText = filterT;
    return {
        type: FILTER_SORT_BOOKS,
        payload: sort(filter(booksArr))
    };
}

export function sortBooks(selectOption) {
    const booksArr = getItem(books) || [];
    sortOption = selectOption;
    return {
        type: FILTER_SORT_BOOKS,
        payload: sort(filter(booksArr))
    };
}

function filter(booksArr) {
    if (filterText && booksArr) {
        booksArr = booksArr.filter((el) => {
            return ~el.bookName.indexOf(filterText) || ~el.author.indexOf(filterText);
        });
    }
    return booksArr;
}

function sort(booksArr) {
    if (sortOption && booksArr) {
        booksArr.sort(function (a, b) {
            if (a[sortOption] > b[sortOption]) return 1;
            else return -1
        });
    }
    return booksArr;
}

export function showAlert(alertData) {
    return {
        type: SHOW_ALERT,
        payload: alertData
    };
}