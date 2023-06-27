import { Input } from "@/components";
import { apiSister } from "@/helper/api/axios";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  dokumen: yup.array().of(
    yup
      .object()
      .shape({
        id_jenis_dokumen: yup.string().required("jenis dokumen wajib diisi."),
        file: yup.string().required("file wajib diisi."),
        nama: yup.string().required("nama dokumen wajib diisi."),
        tautan: yup.string().required("tautan wajib diisi."),
        keterangan: yup.string().required("keterangan wajib diisi."),
      })
      .required("dokumen wajib diisi.")
  ),
  username: yup.string().required(),
  password: yup.string().required(),
  id_pengguna: yup.string().required(),
});

const Login = () => {
  const [data, setData] = useState();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen items-center justify-start bg-slate-200 dark:bg-slate-900 dark:text-white">
      <Image
        alt="logo"
        src={"/logo itk png.png"}
        width={150}
        height={150}
        className="object-cover aspect-square mx-auto"
      />
      <Formik
        initialValues={{
          username: "4PU03FXTjYYrMxACQLD5fvxwUOKc4B8OmXpNPU9MnkU=",
          password:
            "uCAYSxR7hlGK/63OzBFRQBWF60S7+n01nTbbxi822uHNKyscLAAiKAt40yNK/a0f",
          id_pengguna: "272fbc02-cf64-4ad9-9363-33afd4d55198",
        }}
        onSubmit={(values) =>
          apiSister.post("/authorize", values).then((res) => {
            setData(res.data);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("token", res.data.token);
            router.replace("/");
          })
        }
        validationSchema={schema}
      >
        {({ initialValues, isSubmitting, isValid, errors, touched }) => (
          <Form className="grid grid-flow-row gap-4 w-10/12 sm:w-3/4 lg:w-1/2 xl:w-[500px] bg-white dark:bg-slate-800 shadow-2xl p-8 rounded-xl">
            <h1 className="capitalize text-primary text-xl font-semibold">
              Sistem Informasi Sumberdaya Terintegrasi
            </h1>
            <Input
              name={"username"}
              label={"username"}
              errors={errors.username}
              touched={touched.username}
              type={"text"}
              // value={initialValues.username}
            />
            <Input
              name={"password"}
              label={"password"}
              errors={errors.password}
              touched={touched.password}
              type={"password"}
              // value={initialValues.password}
            />
            <Input
              name={"id_pengguna"}
              label={"id_pengguna"}
              errors={errors.id_pengguna}
              touched={touched.id_pengguna}
              type={"text"}
              // value={initialValues.id_pengguna}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="disabled:cursor-not-allowed rounded-lg py-2 px-4 bg-primary text-white"
            >
              {isSubmitting ? "Memuat..." : "Kirim"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
