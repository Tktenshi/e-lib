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
                <p>{this.props.bookName}</p>
                <p>Автор: {this.props.author}</p>
                <button>ред</button>
                <button>дел</button>
            </div>
        )
    }
}

export default Book;