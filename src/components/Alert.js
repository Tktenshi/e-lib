import React, {Component} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.alertData && this.props.alertData.alertType
        };

        this.alertOptions = {
            delete: {
                type: "danger",
                title: "Удалить книгу?",
                showCancel: true,
                confirmBtnBsStyle: "danger",
                cancelBtnBsStyle: "default",
                confirmBtnText: "Да, удали её!",
                cancelBtnText: "Отмена",
                text: "Действие необратимо!",
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: (nextProps.alertData && nextProps.alertData.alertType) || false});
    }

    confirmAlert = () => {
        this.hideAlert();
        this.props.alertData && this.props.alertData.alertConfirm();
    };

    hideAlert = () => {
        this.setState({show: false});
    };

    render() {
        const options = this.alertOptions[(this.props.alertData && this.props.alertData.alertType) || "delete"];
        return (
            <div>
                <SweetAlert className="sweet-alert"
                            {...options}
                            show={!!this.state.show}
                            onConfirm={this.confirmAlert}
                            onCancel={this.hideAlert}>
                    {options.text}
                </SweetAlert>
            </div>
        )
    }
}