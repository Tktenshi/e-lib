import Settings from '../components/Settings'
import {connect} from 'react-redux';
import {createBook, editBook} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        currentBook: state.libReducer.currentBook,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: function (book) {
            dispatch(createBook(book))
        },
        editBook: function (book) {
            dispatch(editBook(book))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);