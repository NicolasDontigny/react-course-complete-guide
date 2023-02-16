import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import classes from './Modal.module.css';

const Backdrop = (props) => (
  <div
    className={classes.backdrop}
    onClick={props.onClose}
  />
);

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');

const Modal = (props) => (
  <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
);

export default Modal;