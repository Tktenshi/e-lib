import React from 'react';
import '../styles/settings.css';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.currentBook.bookName || "",
            author: this.props.currentBook.author || "",
            year: this.props.currentBook.year || "",
            pages: this.props.currentBook.pages || "",
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bookName: nextProps.currentBook.bookName || "",
            author: nextProps.currentBook.author || "",
            year: nextProps.currentBook.year || "",
            pages: nextProps.currentBook.pages || "",
        });
    }

    saveClick = () => {
        //2018-01-27
        if (!this.state.bookName) {
            alert("Введите название книги");
            return;
        }
        if (isNaN(+this.state.pages)) {
            alert("Количество страниц должно быть числом");
            return;
        }
        if (this.state.year && !/^\d{4}\.\d{2}\.\d{2}$/.test(this.state.year)) {
            alert("Год издания должен быть в формате 'ГГГГ.ММ.ДД'");
            return;
        }
        if (this.props.currentBook.id) {
            this.props.editBook({
                id: this.props.currentBook.id,
                ...this.state
            });
        } else {
            this.props.createBook({
                bookName: this.state.bookName,
                author: this.state.author,
                year: this.state.year,
                pages: this.state.pages,
            });
        }
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    render() {
        return (
            <div className="settings">
                <h1>Настройки</h1>
                <label>Название книги
                    <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleChange}/>
                </label>
                <label>Автор книги
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                </label>
                <label>Год издания
                    <input type="date" placeholder="ГГГГ.ММ.ДД" name="year" value={this.state.year}
                           onChange={this.handleChange}/>
                </label>
                <label>Количество страниц
                    <input type="number" step="1" name="pages" value={this.state.pages} onChange={this.handleChange}/>
                </label>
                <button onClick={this.saveClick}>Сохранить</button>
            </div>
        )
    }
}

export default Settings;