import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={router.back} className="flex items-center gap-2">
      <i className="fi-rr-angle-left"></i>
      <span>Kembali</span>
    </button>
  );
};

export default BackButton;
