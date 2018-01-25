import Book from '../components/Book'
import {connect} from 'react-redux';
import {deleteBook, editBook} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        // quickAccessCur: state.converterRed.quickAccessCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editBook: function (bookId) {
            dispatch(editBook(bookId))
        },
        deleteBook: function (bookId) {
            dispatch(deleteBook(bookId))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);