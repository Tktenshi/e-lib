import React from 'react';
import '../styles/book.css';

class Book extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="book">
                <h1>Book</h1>
                <p>Автор: </p><h2>Book</h2>
            </div>
        )
    }
}

export default Book;