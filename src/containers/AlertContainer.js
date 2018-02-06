import Alert from '../components/Alert'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        alertData: state.libReducer.alertData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // showAlert: function (alertData) {
        //     dispatch(showAlert(alertData))
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);