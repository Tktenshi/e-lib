import React from 'react';
import '../styles/filterSort.css';

class FilterSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: "bookName",
            filter: "",
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

    clickSearch = () => {
        // this.setState({
        //     filter: "",
        // });
        this.props.filterBooks(this.state.filter);
    };

    handleChange = (evt) => {
        this.setState({
            filter: evt.target.value,
        });
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
                    <input type="text" className="input" value={this.state.filter} onChange={this.handleChange}/>
                    <button className="button search_button" onClick={this.clickSearch}>Найти</button>
                </fieldset>
            </div>
        )
    }
}

export default FilterSort;