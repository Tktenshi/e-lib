import React from 'react';
import '../styles/book.css';

class Book extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    btnDelClick = (evt) => {
        this.props.deleteBook();
    };

    render() {
        return (
            <div className="book">
                <p>{this.props.bookName}</p>
                <p>Автор: {this.props.author}</p>
                <button>ред</button>
                <button onClick={this.btnDelClick}>дел</button>
            </div>
        )
    }
}

export default Book;