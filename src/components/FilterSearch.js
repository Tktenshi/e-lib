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
                <fieldset className="fieldset filter">
                    <legend>Сортировочка</legend>
                    <div className="fieldset-container">
                        <label><input type="radio"/> По названию</label>
                        <label><input type="radio"/> По автору</label>
                    </div>
                </fieldset>
                <fieldset className="fieldset search">
                    <legend>Поиск</legend>
                    <input type="text" className="input"/>
                    <button className="button search_button">Найти</button>
                </fieldset>
            </div>
        )
    }
}

export default FilterSearch;