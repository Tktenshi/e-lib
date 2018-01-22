import React from 'react';
import '../styles/settings.css';
import {getItem, setItem} from "../utils/LocalStorage";
import {books} from "../consts/consts";

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            bookName: "",
            author: "",
            year: "",
            pages: "",
        };
    }

    saveClick = () => {
        const booksArr = getItem(books) || [];
        // const {bookName, author, year, pages} = this.state;
        // booksArr.push({bookName, author, year, pages});
        booksArr.push({
            bookName: this.state.bookName,
            author: this.state.author,
            year: this.state.year,
            pages: this.state.pages,
        });
        setItem(books, booksArr)
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    render() {
        return (
            <div className="settings">
                <h1>Настройки</h1>
                <label>Название книги
                    <input type="text" name="bookName" onChange={this.handleChange}/>
                </label>
                <label>Автор книги
                    <input type="text" name="author" onChange={this.handleChange}/>
                </label>
                <label>Год издания
                    <input type="date" name="year" onChange={this.handleChange}/>
                </label>
                <label>Количество страниц
                    <input type="number" step="1" name="pages" onChange={this.handleChange}/>
                </label>
                <button onClick={this.saveClick}>Сохранить</button>
            </div>
        )
    }
}

export default Settings;