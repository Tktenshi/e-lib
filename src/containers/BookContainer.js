import Book from '../components/Book'
import {connect} from 'react-redux';
import {deleteBook} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        // quickAccessCur: state.converterRed.quickAccessCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: function (book) {
            dispatch(deleteBook(book))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);