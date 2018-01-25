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
        if (this.props.currentBook.id) {
            console.log("edit");
        } else {
            this.props.createBook({
                bookName: this.state.bookName,
                author: this.state.author,
                year: this.state.year,
                pages: this.state.pages,
            });
        }
        this.setState({
            bookName: "",
            author: "",
            year: "",
            pages: "",
        });
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
                    <input type="date" name="year" value={this.state.year} onChange={this.handleChange}/>
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