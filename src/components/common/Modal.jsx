import React from 'react';
import { getClasses } from '../../helper/classes';
import Button from './Button';

const Modal = ({ show, children, handleClose }) => {
  const classes = getClasses({
    block: show,
    hidden: !show,
  });
  return (
    <div
      className={`fixed top-0 lef-0 w-full h-full bg-backdrop ${classes} flex items-center justify-center `}
    >
      <div className="modal-main bg-white w-auto h-auto rounded-lg pt-10 px-10 pb-5 ">
        {children}
        <Button
          label="Ok"
          onClick={handleClose}
          className="mt-5 mr-0 ml-auto"
        />
      </div>
    </div>
  );
};

export default Modal;
