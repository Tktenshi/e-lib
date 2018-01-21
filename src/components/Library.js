import React from 'react';
import '../styles/library.css';
import Book from "./Book";
import {getItem} from "../utils/LocalStorage";

class Library extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let books = getItem(books);
        return (
            <div className="library">
                <h1>Library</h1>
                {books && books.map((book, i) => {
                    return (
                        <Book key={i}
                              // title={this.state.allCur[btn]}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Library;