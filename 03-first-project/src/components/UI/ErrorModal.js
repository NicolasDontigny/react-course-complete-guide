import React from 'react';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      className={styles.backdrop}
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.content}>
        <span>{props.children}</span>
      </div>
      <div className={styles.actions}>
        <Button onClick={props.onCancel}>Cancel</Button>
        <Button onClick={props.onConfirm}>Confirm</Button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
        >
          {props.children}
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
