import Alert from '../components/Alert'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        alertData: state.libReducer.alertData,
    };
};

export default connect(mapStateToProps)(Alert);