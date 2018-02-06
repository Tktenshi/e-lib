import React from 'react';
import '../styles/filterSort.css';

class FilterSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: "bookName",
        };
    }

    componentDidMount() {
        this.props.sortBooks("bookName");
    }

    changeSort = (evt) => {
        this.setState({
            sort: evt.target.value,
        });
        this.props.sortBooks(evt.target.value);
    };

    render() {
        return (
            <div className="filter-sort">
                <fieldset className="fieldset sort">
                    <legend>Сортировочка</legend>
                    <div className="fieldset-container">
                        <label>
                            <input type="radio" name="sort" value="bookName" checked={this.state.sort === "bookName"}
                                   onChange={this.changeSort}
                            /> По названию
                        </label>
                        <label>
                            <input type="radio" name="sort" value="author" checked={this.state.sort === "author"}
                                   onChange={this.changeSort}
                            /> По автору
                        </label>
                    </div>
                </fieldset>
                <fieldset className="fieldset filter">
                    <legend>Поиск</legend>
                    <input type="text" className="input"/>
                    <button className="button search_button">Найти</button>
                </fieldset>
            </div>
        )
    }
}

export default FilterSort;