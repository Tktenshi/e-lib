import Book from '../components/Book'
import {connect} from 'react-redux';
import {deleteBook, setEditBook} from "../actions/pageActions";

const mapDispatchToProps = (dispatch) => {
    return {
        editBook: function (bookId) {
            dispatch(setEditBook(bookId))
        },
        deleteBook: function (bookId) {
            dispatch(deleteBook(bookId))
        },
    };
};

export default connect(null, mapDispatchToProps)(Book);