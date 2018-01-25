import Settings from '../components/Settings'
import {connect} from 'react-redux';
import {createBook} from "../actions/pageActions";

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);