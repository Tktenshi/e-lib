import FilterSort from '../components/FilterSort'
import {connect} from 'react-redux';
import {filterBooks, sortBooks} from "../actions/pageActions";

const mapDispatchToProps = (dispatch) => {
    return {
        sortBooks: function (selectOption) {
            dispatch(sortBooks(selectOption))
        },
        filterBooks: function (filterText) {
            dispatch(filterBooks(filterText))
        },
    };
};

export default connect(null, mapDispatchToProps)(FilterSort);