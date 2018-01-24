import Library from '../components/Library'
import {connect} from 'react-redux';
// import {changeQuickAccessCur} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        books: state.libReducer.books,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // changeBookSettings: function (currencyList) {
        //     dispatch(changeQuickAccessCur(currencyList))
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);