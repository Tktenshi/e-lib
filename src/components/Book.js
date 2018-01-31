import React from 'react';
import '../styles/book.css';
import Alert from '../components/Alert';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeAlert: false,
        };
        this.alertConfirm = null;
    }

    btnDelClick = (evt) => {
        this.setState({typeAlert: "delete"});
        this.alertConfirm = () => {
            this.props.deleteBook(this.props.id);
            this.setState({typeAlert: false});
        }

    };

    btnEditClick = (evt) => {
        this.props.editBook(this.props.id);
    };

    render() {
        return (
            <fieldset className="book">
                <p className="book_text">{this.props.bookName}</p>
                <p className="book_text">Автор: {this.props.author}</p>
                <button className="button book_button" onClick={this.btnEditClick}><img className="book_icon" src={require("../imgs/edit3.png")} alt="ред."/></button>
                <button className="button book_button" onClick={this.btnDelClick}><img className="book_icon" src={require("../imgs/trash.png")} alt="удалить"/></button>
                {
                    this.state.typeAlert &&
                    <Alert typeAlert={this.state.typeAlert} alertConfirm={this.alertConfirm}/>
                }
            </fieldset>
        )
    }
}

export default Book;