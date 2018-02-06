import React from 'react';
import '../styles/library.css';
import Book from "../containers/BookContainer";
import {getItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";
import FilterSort from "../containers/FilterSortContainer";
import Alert from "../containers/AlertContainer";

class Library extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    showAlert = (alertType, alertConfirm) => {
        this.props.showAlert({alertType, alertConfirm});
    };


    render() {
        const booksArr = this.props.books || getItem(books);
        return (
            <div className="library">
                <Alert/>
                <FilterSort/>
                {booksArr && booksArr.map((book, i) => {
                    return (
                        <Book key={i}
                              bookName={book.bookName}
                              author={book.author}
                              id={book.id}
                              showAlert={this.showAlert}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Library;