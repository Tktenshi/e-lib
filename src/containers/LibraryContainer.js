import Library from '../components/Library'
import {connect} from 'react-redux';
import {showAlert} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        books: state.libReducer.books,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showAlert: function (alertData) {
            dispatch(showAlert(alertData))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);