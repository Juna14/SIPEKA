import React, { useRef } from "react";
import { Formik, Form } from "formik";
import { useState } from "react";
import Dropbox from "dropbox";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const fileInput = useRef();
  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileUpload = async (values, { setSubmitting }) => {
    try {
      // Upload the file to Dropbox
      const response = await dropbox.filesUpload({
        path: `/${file.name}`,
        contents: file,
        mode: { ".tag": "overwrite" },
      });

      // Display a success message
      console.log(`File uploaded: ${response.path_display}`);

      // Reset the form
      setSubmitting(false);
      setFile(null);
    } catch (error) {
      // Display an error message
      console.error(error);

      // Reset the form
      setSubmitting(false);
      setFile(null);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <label
          htmlFor={"name"}
          className="uppercase leading-tight font-bold text-sm"
        >
          Upload File
        </label>
        <div
          name="name"
          onClick={() => fileInput.current.click()}
          onDrop={(event) => {
            event.preventDefault();
            setFile(event.dataTransfer.files[0]);
          }}
          onDragOver={(event) => event.preventDefault()}
          className={`cursor-pointer shadow-lg border-2 border-dashed border-primary rounded-xl bg-white dark:bg-slate-800 w-full h-[200px] flex items-center justify-center text-center p-2`}
        >
          {file ? (
            <p>{file.name}</p>
          ) : (
            <p>Drag and drop file here, or click to select file.</p>
          )}
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            className="hidden"
            ref={fileInput}
            onChange={handleFileSelect}
          />
        </div>
        {/* <button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!file || isSubmitting}
              startIcon={<i className="fi-rr-box" />}
            >
              {isSubmitting ? "Uploading..." : "Submit"}
            </button> */}
      </div>
    </>
  );
};

export default UploadFile;
