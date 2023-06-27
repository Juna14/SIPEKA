import {
  Breadcrumbs,
  Button,
  CardDataPribadi,
  FotoProfil,
  MainLayout,
  ModalUploadFoto,
  Nav,
} from "@/components";
import {
  fetchAlamat,
  fetchBidangIlmu,
  fetchKeluarga,
  fetchKepegawaian,
  fetchKependudukan,
  fetchLainLain,
  fetchProfil,
} from "@/helper/api/api";
import { dateFormater, dateOptions, id } from "@/helper/constant";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DataPribadi = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const {
    data: alamat,
    error,
    failureReason,
  } = useQuery({
    queryKey: ["alamat"],
    queryFn: async () => await fetchAlamat(id),
    networkMode: "offlineFirst",
  });
  const { data: profil } = useQuery({
    queryKey: ["profil"],
    queryFn: async () => await fetchProfil(id),
    networkMode: "offlineFirst",
  });
  const { data: kependudukan } = useQuery({
    queryKey: ["kependudukan"],
    queryFn: async () => await fetchKependudukan(id),
    networkMode: "offlineFirst",
  });
  const { data: lain } = useQuery({
    queryKey: ["lain"],
    queryFn: async () => await fetchLainLain(id),
    networkMode: "offlineFirst",
  });
  const { data: keluarga } = useQuery({
    queryKey: ["keluarga"],
    queryFn: async () => await fetchKeluarga(id),
    networkMode: "offlineFirst",
  });
  const { data: kepegawaian } = useQuery({
    queryKey: ["kepegawaian"],
    queryFn: async () => await fetchKepegawaian(id),
    networkMode: "offlineFirst",
  });
  const { data: bidangIlmu } = useQuery({
    queryKey: ["bidangIlmu"],
    queryFn: async () => await fetchBidangIlmu(id),
    networkMode: "offlineFirst",
  });

  return (
    <MainLayout
      modal={
        <ModalUploadFoto
          showModal={showModal}
          setShowModal={() => {
            setShowModal(!showModal);
          }}
        />
      }
    >
      <div className="flex flex-col gap-8">
        <Nav title={"Data pribadi"} />
        <div className="grid grid-flow-row xl:grid-flow-col gap-8">
          <CardDataPribadi
            title={"profil"}
            editLink={"/edit-biodata"}
            data={[
              {
                title: "Nama",
                text: profil?.data[0]?.pegawai.nama_sdm.toLowerCase(),
              },
              { title: "Jenis Kelamin", text: profil?.data[0]?.jenis_kelamin },
              { title: "NIDN", text: profil?.data[0]?.pegawai.nidn },
              {
                title: "Tempat, tanggal lahir",
                text:
                  profil?.data[0]?.tempat_lahir +
                  ", " +
                  dateFormater(profil?.data[0]?.tanggal_lahir),
              },
              { title: "Ibu Kandung", text: profil?.data[0]?.nama_ibu_kandung },
            ]}
          >
            <div className="relative w-[300px] h-[300px] mx-auto">
              <FotoProfil />
            </div>

            <Button
              icon={<i className="fi-rr-upload"></i>}
              size={"small"}
              text={"Unggah Foto"}
              onClick={() => setShowModal(!showModal)}
            ></Button>
          </CardDataPribadi>
          <CardDataPribadi
            title={"Alamat dan kontak"}
            editLink={"/edit-alamat"}
            data={[
              { title: "Email", text: alamat?.data[0].email },
              { title: "Alamat", text: alamat?.data[0].alamat },
              { title: "RT", text: alamat?.data[0].rt },
              { title: "RW", text: alamat?.data[0].rw },
              { title: "Dusun", text: alamat?.data[0].dusun },
              { title: "Desa/Kelurahan", text: alamat?.data[0].kelurahan },
              {
                title: "Kota/Kabupaten",
                text: alamat?.data[0].wilayah.nama,
              },
              { title: "Provinsi", text: alamat?.data[0].id_kota_kabupaten },
              { title: "Kode Pos", text: alamat?.data[0].kode_pos },
              {
                title: "No. Telepon Rumah",
                text: alamat?.data[0].telepon_rumah,
              },
              { title: "No. HP", text: alamat?.data[0].telepon_hp },
            ]}
          />
          <CardDataPribadi
            title={"kepegawaian"}
            editLink={"/edit-kepegawaian"}
            data={[
              {
                title: "Program Studi",
                text: kepegawaian?.data[0]?.program_studi,
              },
              {
                title: "NIP (khusus PNS)",
                text: kepegawaian?.data[0]?.pegawai.nip,
              },
              {
                title: "Status Kepegawaian",
                text: kepegawaian?.data[0]?.status_kepegawaian,
              },
              {
                title: "Status Keaktifan",
                text: kepegawaian?.data[0]?.status_keaktifan,
              },
              { title: "Nomor SK CPNS", text: kepegawaian?.data[0]?.sk_cpns },
              {
                title: "SK CPNS Terhitung Mulai Tanggal",
                text: dateFormater(kepegawaian?.data[0]?.tanggal_sk_cpns),
              },
              { title: "Nomor SK TMMD", text: kepegawaian?.data[0]?.sk_tmmd },
              {
                title: "Tanggal Mulai Menjadi Dosen (TMMD)",
                text: dateFormater(kepegawaian?.data[0]?.tmmd),
              },
              {
                title: "Pangkat/Golongan",
                text: kepegawaian?.data[0]?.pangkat_golongan,
              },
              {
                title: "Sumber Gaji",
                text: kepegawaian?.data[0]?.sumbergaji.nama,
              },
            ]}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <CardDataPribadi
            title={"kependudukan"}
            editLink={"/edit-kependudukan"}
            data={[
              { title: "Nik", text: kependudukan?.data[0]?.nik },
              { title: "Agama", text: kependudukan?.data[0]?.agama.nama },
              {
                title: "Kewarganegaraan",
                text: kependudukan?.data[0]?.negara.nama,
              },
            ]}
          />
          <CardDataPribadi
            title={"Lain-lain"}
            editLink={"/edit-lain"}
            data={[
              { title: "NPWP", text: lain?.data?.npwp },
              { title: "Nama Wajib Pajak", text: lain?.data?.nama_wp },
              { title: "SINTA ID", text: lain?.data?.sinta_id }, // no data,
            ]}
          />
        </div>
        <div className="flex flex-col item-stretch gap-8">
          <CardDataPribadi
            title={"keluarga"}
            editLink={"/edit-keluarga"}
            data={[
              {
                title: "Status Perkawinan",
                text: keluarga?.data[0].status_kawin,
              },
              {
                title: "Nama Suami/Istri",
                text: keluarga?.data[0].nama_pasangan,
              },
              {
                title: "NIP Suami/Istri",
                text: keluarga?.data[0].nip_pasangan,
              },
              {
                title: "Pekerjaan Suami/Istri",
                text: keluarga?.data[0].jenispekerjaan.nama,
              },
              {
                title: "Terhitung Mulai Tanggal PNS Suami/Istri",
                text: keluarga?.data[0].tanggal_mulai_pns, // no
              },
            ]}
          />
          <CardDataPribadi
            title={"Bidang keilmuan"}
            editLink={"/edit-bidang-keilmuan"}
            data={[
              {
                title: bidangIlmu?.data[0]?.urutan,
                text: bidangIlmu?.data[0]?.kelompokbidang.nama,
              },
            ]}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default DataPribadi;
