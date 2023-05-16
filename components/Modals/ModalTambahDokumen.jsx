import React from "react";
import { Button, Modal, MultipleUploadFile } from "..";
import { Form, Formik } from "formik";

const ModalTambahDokumen = ({ title = "modal", showModal, setShowModal }) => {
  return (
    <Modal
      key={title}
      isOpen={showModal}
      setIsOpen={setShowModal}
      title={title}
    >
      <Formik
        enableReinitialize
        initialValues={{
          nama: "",
          tautan: "",
          keterangan: "",
          id_jenis_dokumen: "",
          file: "",
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <MultipleUploadFile limit={1} />
            <Button
              type={"submit"}
              text={isSubmitting ? "Loading..." : "Submit"}
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalTambahDokumen;
