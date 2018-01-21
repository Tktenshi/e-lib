import React from 'react';
import '../styles/settings.css';

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="settings">
                <h1>Настройки</h1>
                <span>Название</span>
                <input></input>
                <span>Автор</span>
                <input></input>
                <span>Год издания</span>
                <input type="date"></input>
                <span>Количество страниц</span>
                <input type="number" step="1"></input>
                <button>Сохранить</button>
            </div>
        )
    }
}

export default Settings;