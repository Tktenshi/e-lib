import React from 'react';
import '../styles/settings.css';
import classNames from 'classnames';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: this.props.currentBook.bookName || "",
            author: this.props.currentBook.author || "",
            year: this.props.currentBook.year || "",
            pages: +this.props.currentBook.pages || "",
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            bookName: nextProps.currentBook.bookName || "",
            author: nextProps.currentBook.author || "",
            year: nextProps.currentBook.year || "",
            pages: +nextProps.currentBook.pages || "",
            error: "",
        });
    }

    saveClick = () => {
        if (!this.state.bookName) {
            this.setState({error: "bookName"});
            alert("Введите название книги");
            return;
        }
        if (isNaN(+this.state.pages) || +this.state.pages < 0) {
            this.setState({error: "pages"});
            alert("Количество страниц должно быть числом");
            return;
        }
        // if (this.state.year && !/^\d{4}\.\d{2}\.\d{2}$/.test(this.state.year)) {
        //     alert("Дата издания должна быть в формате 'ГГГГ.ММ.ДД'");
        //     return;
        // }
        if (this.state.year && !/^\d{4}$/.test(this.state.year)) {
            this.setState({error: "year"});
            alert("Год издания должен быть в формате 'ГГГГ'");
            return;
        }
        this.setState({error: ""});
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
        this.setState({
            [evt.target.name]: evt.target.value,
            error: "",
        });
    };

    render() {
        return (
            <fieldset className="fieldset settings">
                <legend className="main_header">Настройки</legend>
                <div className="fieldset-container">
                    <label>Название книги
                        <input type="text"
                               className={classNames("input", {"error-input": this.state.error === "bookName"})}
                               name="bookName"
                               value={this.state.bookName}
                               onChange={this.handleChange}/>
                    </label>
                    <label>Автор
                        <input type="text"
                               className="input"
                               name="author"
                               value={this.state.author}
                               onChange={this.handleChange}/>
                    </label>
                    <label>Год издания
                        <div className="settings_year--container">
                            <input type="number"
                                   className={classNames("input settings_year--input", {"error-input": this.state.error === "year"})}
                                   name="year"
                                   value={this.state.year}
                                   min="1000"
                                   placeholder="ГГГГ"
                                   onChange={this.handleChange}/>
                            <img src={require("../images/calendar.png")} alt=""/>
                        </div>
                    </label>
                    <label>Количество страниц
                        <input type="number"
                               className={classNames("input settings_page", {"error-input": this.state.error === "pages"})}
                               name="pages"
                               value={this.state.pages}
                               min="0"
                               step="1"
                               onChange={this.handleChange}/>
                    </label>
                    <button className="button settings_save" onClick={this.saveClick}>Сохранить</button>
                </div>
            </fieldset>
        )
    }
}

export default Settings;