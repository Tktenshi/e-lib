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
                <p>{this.props.bookName}</p>
                <p>Автор: {this.props.author}</p>
                <button className="button" onClick={this.btnEditClick}>ред</button>
                <button className="button" onClick={this.btnDelClick}>дел</button>
                {
                    this.state.typeAlert &&
                    <Alert typeAlert={this.state.typeAlert} alertConfirm={this.alertConfirm}/>
                }
            </fieldset>
        )
    }
}

export default Book;