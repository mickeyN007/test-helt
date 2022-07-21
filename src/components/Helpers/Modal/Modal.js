import React from "react";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = (props) => {
  const { show, onClose } = props;

  //handle show
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <Button content="Close" click={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
