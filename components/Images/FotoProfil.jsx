import { apiSister } from "@/helper/api/axios";
import { id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FotoProfil = () => {
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await apiSister.get(`/data_pribadi/foto/${id}`, {
          responseType: "arraybuffer",
        });

        const dataUrl = `data:image/jpeg;base64,${Buffer.from(
          response?.data,
          "binary"
        ).toString("base64")}`;
        setImageSrc(dataUrl);
      } catch (error) {
        console.log(error.message, "foto profil");
      }
    };
    return () => fetchImage();
  }, []);
  if (!imageSrc)
    return (
      <div
        className={`block rounded-lg shadow-lg w-full h-full bg-gray-500 animate-pulse`}
      ></div>
    );
  return (
    <>
      <Image
        src={imageSrc}
        fill
        placeholder="blur"
        blurDataURL={"/img.png"}
        alt="foto-profil"
        className={`rounded-lg shadow-lg  object-cover`}
      />
    </>
  );
};

export default FotoProfil;
