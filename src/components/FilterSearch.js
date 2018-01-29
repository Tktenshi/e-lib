import React from 'react';
import '../styles/filterSearch.css';

class FilterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="filter-search">
                <fieldset className="fieldset">
                    <legend>Сортировочка</legend>
                    <label><input type="radio"/> По названию</label>
                    <label><input type="radio"/> По автору</label>
                </fieldset>
                <fieldset className="fieldset">
                    <legend>Поиск</legend>
                    <input type="text" className="input"/>
                    <button className="button">Найти</button>
                </fieldset>
            </div>
        )
    }
}

export default FilterSearch;