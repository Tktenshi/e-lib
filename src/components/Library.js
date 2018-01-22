import React from 'react';
import '../styles/library.css';
import Book from "./Book";
import {getItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";

class Library extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const booksArr = getItem(books);
        return (
            <div className="library">
                <h1>Library</h1>
                {booksArr && booksArr.map((book, i) => {
                    return (
                        <Book key={i}
                              bookName={book.bookName}
                              author={book.author}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Library;