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
          dokumen: [
            {
              id: "",
              id_jenis_dokumen: "",
              nama: "",
              keterangan: "",
              tanggal_upload: "",
              tautan: "",
              jenis_file: "",
              nama_file: "",
              jenis_dokumen: "",
            },
          ],
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting, values, errors, touched, setFieldValue }) => (
          <Form className="flex flex-col gap-4 p-4">
            <MultipleUploadFile
              limit={1}
              values={values}
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />
            <Button
              type={"submit"}
              text={isSubmitting ? "Memuat..." : "Kirim"}
            />
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalTambahDokumen;
