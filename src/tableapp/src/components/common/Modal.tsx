import * as React from 'react';
const { Modal } = require('react-bootstrap');

interface ModalProps {
    children?: any;
    mainClass?: string;
    titleText?: string;
    showModal?: boolean;
    onModalHide?: () => void;
    onSubmitClick?: () => void;
}

class ModalComponent extends React.Component<ModalProps, {}> {
    onModalHide = () => {
        const { onModalHide } = this.props;
        if (onModalHide) { onModalHide(); }
    }
    onClick = () => {
        const { onSubmitClick } = this.props;
        if (onSubmitClick) { onSubmitClick(); }
    }
    render() {
        const {
          children,
          titleText = 'Title',
          showModal
        } = this.props;
        return (
            <Modal dialogClassName="adjustCashModal clearfix" show={showModal} onHide={this.onModalHide}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>{titleText}</Modal.Title>
                </Modal.Header>
                <Modal.Body bsClass="clearfix">
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={this.onModalHide}>Close</button>
                    <button
                      className="btn btn-primary btn-light-blue active"
                      onClick={this.onClick}
                    >Save changes
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;
