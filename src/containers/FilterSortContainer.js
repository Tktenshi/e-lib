import FilterSort from '../components/FilterSort'
import {connect} from 'react-redux';
import {filterBooks, sortBooks} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        // quickAccessCur: state.converterRed.quickAccessCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortBooks: function (selectOption) {
            dispatch(sortBooks(selectOption))
        },
        filterBooks: function (filterText) {
            dispatch(filterBooks(filterText))
        },
        // deleteBook: function (bookId) {
        //     dispatch(deleteBook(bookId))
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSort);