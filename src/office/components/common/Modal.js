import React from "react";
import { Modal } from "react-bootstrap";

class ModalComponent extends React.Component {
  onModalHide = () => {
    if(this.props.onModalHide) this.props.onModalHide();
  }
  render() {
    const {
      children,
      titleText = "Title",
      showModal
    } = this.props;
    return (
      <Modal dialogClassName="adjustCashModal clearfix" show={showModal} onHide={this.onModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass="clearfix">
          {children}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default">Close</button>
          <button className="btn btn-primary btn-light-blue active">Save changes</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
