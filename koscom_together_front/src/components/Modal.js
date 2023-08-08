import React, { useRef } from "react";
import { ModalBackground, ModalBody } from "../styles/CommonEmotion";

const Modal = (props) => {
  const outSection = useRef();

  return (
    <>
      {props.modalShow ? (
        <ModalBackground
          ref={outSection}
          onClick={(e) => {
            if (outSection.current === e.target) {
              props.setModalShow(false);
            }
          }}>
          <ModalBody>{props.children}</ModalBody>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default Modal;
