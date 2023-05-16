import React from "react";
import { Button, Modal, UploadFile } from "..";

const ModalUploadFoto = ({ title, showModal, setShowModal }) => {
  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      key={title}
      title={title}
    >
      <div className="flex flex-col gap-4">
        <UploadFile />
        <Button
          icon={<i className="fi-rr-save"></i>}
          size={"small"}
          text={"Simpan"}
        />
      </div>
    </Modal>
  );
};

export default ModalUploadFoto;
