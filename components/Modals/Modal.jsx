import React, { useState } from "react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
  // const handleClose = () => setIsOpen(!isOpen);
  if (!isOpen) return <></>;
  return (
    <div className="fixed inset-0 z-50 w-full min-h-screen  flex flex-col items-center justify-center">
      <div className="relative min-w-300 lg:w-1/2 min-h-300 bg-white dark:bg-slate-800 dark:text-white rounded-xl z-10 p-2 m-8 flex flex-col gap-4 overflow-auto">
        <h1 className="text-base font-semibold capitalize pl-2 pr-8 truncate">
          {title}
        </h1>
        <i
          className=" fi-rr-cross absolute top-4 right-4 text-red-500 cursor-pointer"
          onClick={setIsOpen}
        ></i>
        <div className="h-full overflow-auto w-full">{children}</div>
      </div>
      <div
        className="bg-slate-900/50 backdrop-blur-sm fixed inset-0 w-full min-h-screen overflow-y-auto"
        onClick={setIsOpen}
      ></div>
    </div>
  );
};

export default Modal;
