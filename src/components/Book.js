import React from 'react';
import '../styles/book.css';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    btnDelClick = () => {
        this.props.showAlert("delete", () => {
            this.props.deleteBook(this.props.id);
        });
    };

    btnEditClick = () => {
        this.props.editBook(this.props.id);
    };

    render() {
        return (
            <fieldset className="book">
                <p className="book_text">{this.props.bookName}</p>
                <p className="book_text">Автор: {this.props.author}</p>
                <button className="button book_button" onClick={this.btnEditClick}>
                    <img className="book_icon--edit" src={require("../images/edit.png")} alt="ред."/>
                </button>
                <button className="button book_button" onClick={this.btnDelClick}>
                    <img className="book_icon--del" src={require("../images/trash.png")} alt="удалить"/>
                </button>

            </fieldset>
        )
    }
}

export default Book;