import React from 'react';
import '../styles/book.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    btnDelClick = (evt) => {
        this.props.deleteBook(this.props.id);
    };

    btnEditClick = (evt) => {
        this.props.editBook(this.props.id);
    };

    render() {
        return (
            <div className="book">
                <p>{this.props.bookName}</p>
                <p>Автор: {this.props.author}</p>
                <button onClick={this.btnEditClick}>ред</button>
                <button onClick={this.btnDelClick}>дел</button>
            </div>
        )
    }
}

export default Book;