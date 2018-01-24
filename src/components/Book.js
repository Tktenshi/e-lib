import React from 'react';
import '../styles/book.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.id = this.props.id;
        console.log(this.props);
    }

    btnDelClick = (evt) => {
        console.log(evt.target);
        console.log(this.id);
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