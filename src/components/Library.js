import React from 'react';
import '../styles/library.css';
import Book from "../containers/BookContainer";
import {getItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";
import FilterSearch from "./FilterSearch";

class Library extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const booksArr = this.props.books || getItem(books);
        return (
            <div className="library">
                <FilterSearch/>
                {booksArr && booksArr.map((book, i) => {
                    return (
                        <Book key={i}
                              bookName={book.bookName}
                              author={book.author}
                              id={book.id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Library;