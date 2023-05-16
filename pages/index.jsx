import { Action, Chip, FotoProfil, MainLayout, Nav, Table } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <section className="flex flex-col gap-4">
        <Nav title={"Institut Teknologi Kalimantan"} />
        <div className="flex flex-col gap-2">
          <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
            Riwayat Perubahan Data Dosen
          </h1>
          <Table
            shadow={false}
            className="text-xs"
            columns={[
              { key: "id", title: "id" },
              { key: "jenis_pdd", title: "Jenis PDD" },
              { key: "jenis_ajuan", title: "Jenis Ajuan" },
              {
                key: "tanggal_ajuan",
                title: "Tanggal Ajuan",
                // render: (val) => dateFormater(val.tanggal_ajuan),
              },
              {
                key: "tanggal_verifikasi",
                title: "Tanggal Verifikasi",
                // render: (val) => dateFormater(val.tanggal_verifikasi),
              },
              { key: "umur_ajuan", title: "Umur Ajuan (hari)" },
              {
                key: "status_ajuan",
                title: "Status Ajuan",
                render: (val) => <Chip text={val.status_ajuan} />,
              },
              {
                key: "id",
                title: "aksi",
                align: "center",
                render: (val) => (
                  <Action param={val} baseUrl={""} action={["detail"]} />
                ),
              },
            ]}
            data={[
              {
                id: 1,
                jenis_pdd: "Pendidikan Formal",
                jenis_ajuan: "Ajuan Data Baru",
                tanggal_ajuan: "28 Mei 2019",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 2,
                jenis_pdd: "Data Pribadi Kepegawaian",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "31 Oktober 2019",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Disetujui Kepegawaian PT",
              },
              {
                id: 3,
                jenis_pdd: "Pendidikan Formal",
                jenis_ajuan: "Ajuan Hapus Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 4,
                jenis_pdd: "Data Pribadi Keluarga",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "",
                umur_ajuan: "",
                status_ajuan: "Ditolak",
              },
              {
                id: 5,
                jenis_pdd: "Pendidikan Formal",
                jenis_ajuan: "Ajuan Data Baru",
                tanggal_ajuan: "28 Mei 2019",
                tanggal_verifikasi: "02 Juli 2019",
                umur_ajuan: "35",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 6,
                jenis_pdd: "Data Pribadi Profil",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "04 Maret 2019",
                tanggal_verifikasi: "22 Maret 2019",
                umur_ajuan: "18",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 7,
                jenis_pdd: "Data Pribadi Alamat dan Kontak",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "30 Maret 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 8,
                jenis_pdd: "Data Pribadi Keluarga",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "16 April 2020",
                tanggal_verifikasi: "21 April 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 9,
                jenis_pdd: "Data Pribadi Kepegawaian",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "25 Maret 2020",
                tanggal_verifikasi: "30 Maret 2020",
                umur_ajuan: "5",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 10,
                jenis_pdd: "Data Pribadi Keluarga",
                jenis_ajuan: "Ajuan Update Data",
                tanggal_ajuan: "25 Juni 2021",
                tanggal_verifikasi: "28 Juni 2021",
                umur_ajuan: "3",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 11,
                jenis_pdd: "Jabatan Fungsional",
                jenis_ajuan: "Ajuan Data Baru",
                tanggal_ajuan: "20 April 2021",
                tanggal_verifikasi: "21 April 2021",
                umur_ajuan: "1",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
              {
                id: 12,
                jenis_pdd: "Kepangkatan",
                jenis_ajuan: "Ajuan Data Baru",
                tanggal_ajuan: "30 Maret 2021",
                tanggal_verifikasi: "30 Maret 2021",
                umur_ajuan: "0",
                status_ajuan:
                  "Disetujui Subdit Karier & Kompetensi / Kementerian",
              },
            ]}
          />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:justify-start lg:items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Ringkasan Profil
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="relative w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] mx-auto">
                  <FotoProfil />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">Nama :</span>
                  <span className="font-semibold">TEGAR PALYUS FIQAR</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    NIDN/NITK :
                  </span>
                  <span className="font-semibold">0007099001</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">NIP :</span>
                  <span className="font-semibold">199009072019031014</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Fakultas :
                  </span>
                  <span className="font-semibold">
                    Matematika dan Teknologi Informasi
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">Prodi :</span>
                  <span className="font-semibold">Informatika</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Status Kepegawaian :
                  </span>
                  <span className="font-semibold">PNS</span>
                </div>
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/data-pribadi"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Kesejahteraan
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="bg-blue-300 dark:bg-blue-500 p-4 rounded-xl min-h-[200px] justify-center items-center flex">
                  Tidak ada data
                </div>
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/kesejahteraan"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Penelitian
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y text-xs">
                <Table
                  shadow={false}
                  columns={[
                    { key: "id", title: "No", dataType: "numbering" },
                    { key: "judul_litabmas", title: "Judul Litabmas" },
                    { key: "tahun_anggaran", title: "Tahun Anggaran" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul_litabmas:
                        "MENGGUNAKAN MODEL LSR (LEXICAL SEMANTIC RECOGNITION) BERBASIS STREUSLE (SUPERSENSE - TAGGED REPOSITORY OF ENGLISH WITH A UNIFIED SEMANTICS FOR LEXICAL EXPRESSIONS) UNTUK MENGEMBANGKAN SISTEM PENILAIAN OTOMATIS PENULISAN ESSAY BAHASA INGGRIS ",
                      tahun_anggaran: "2022",
                    },
                    {
                      id: 2,
                      judul_litabmas:
                        "Pembangunan Dashboard untuk Penerimaan Mahaiswa Baru Institut Teknologi Kalimantan",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 3,
                      judul_litabmas:
                        "Integrasi Pelayanan Publik Unit Pelaksana Teknis Bahasa Berbasis Web",
                      tahun_anggaran: "2020",
                    },
                    {
                      id: 4,
                      judul_litabmas:
                        "Perancangan Arsitektur Sistem dan Teknologi Informasi untuk Organisasi Perangkat Daerah (OPD) Pemerintah Kota Balikpapan menggunakan TOGAF (The Open Group Architecture Framework)",
                      tahun_anggaran: "2019",
                    },
                    {
                      id: 5,
                      judul_litabmas:
                        "Perancangan Arsitektur Sistem dan Teknologi Informasi untuk Organisasi Perangkat Daerah (OPD) Pemerintah Kota Balikpapan menggunakan TOGAF (The Open Group Architecture Framework) ",
                      tahun_anggaran: "2019",
                    },
                  ]}
                />
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/penelitian"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Publikasi
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y text-xs">
                {/* <div className="bg-blue-300 dark:bg-blue-500 p-4 rounded-xl min-h-[200px] justify-center items-center flex">Tidak ada data</div> */}
                <Table
                  shadow={false}
                  columns={[
                    { key: "id", title: "No", dataType: "numbering" },
                    { key: "judul", title: "Judul" },
                    { key: "jenis", title: "Jenis" },
                    { key: "tahun_anggaran", title: "Tanggal Terbit" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul:
                        "MULTIPLE LEVEL DATA HIDING MEDICAL IMAGE BASE ON DISCRETE COSINE TRANSFORM (DCT) METHOD USING MULTISCALE IMAGE SHARING (MSIS)",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 2,
                      judul:
                        "MODIFIKASI FOTOBIOREAKTOR HEMAT ENERGI DENGAN LIGHT EMITTING DIODE (LED) UNTUK MENINGKATKAN POPULASI Chlorella spp. DALAM UPAYA P...",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 3,
                      judul: "Halaman Belakang",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 4,
                      judul:
                        "Developing problem solvers: New perspectives on pedagogical practices in police use of force training",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                    {
                      id: 5,
                      judul:
                        "MODIFIKASI FOTOBIOREAKTOR HEMAT ENERGI DENGAN LIGHT EMITTING DIODE (LED) UNTUK MENINGKATKAN POPULASI Chlorella spp. DALAM UPAYA PEMENUHAN PAKAN ALAMI LARVA IKAN BANDENG",
                      jenis: "Lain-lain",
                      tanggal_terbit: "",
                    },
                  ]}
                />
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/publikasi"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Visiting Scientist
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="bg-blue-300 dark:bg-blue-500 p-4 rounded-xl min-h-[200px] justify-center items-center flex">
                  Tidak ada data
                </div>
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/visiting-scientist"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Pendidikan Terakhir
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Jenjang Pendidikan :
                  </span>
                  <span className="font-semibold">S2</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Bidang Studi :
                  </span>
                  <span className="font-semibold">Teknik Informatika</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Perguruan Tinggi :
                  </span>
                  <span className="font-semibold">
                    Institut Teknologi Sepuluh November
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Tahun Lulus :
                  </span>
                  <span className="font-semibold">2017</span>
                </div>

                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/pendidikan-formal"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Tunjangan
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y text-xs">
                {/* <div className="bg-blue-300 dark:bg-blue-500 p-4 rounded-xl min-h-[200px] justify-center items-center flex">Tidak ada data</div> */}
                <Table
                  shadow={false}
                  columns={[
                    { key: "id", title: "No", dataType: "numbering" },
                    { key: "tunjangan", title: "Tunjangan" },
                    { key: "instansi", title: "Instansi" },
                    { key: "dari_tahun", title: "Dari Tahun" },
                    { key: "sampai_tahun", title: "Sampai Tahun" },
                  ]}
                  data={[
                    {
                      id: 1,
                      tunjangan: "Tunjangan Istri",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "",
                    },
                    {
                      id: 2,
                      tunjangan: "Kepala UPT TIK",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "2023",
                    },
                    {
                      id: 3,
                      tunjangan: "Tunjangan Umum",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2019",
                      sampai_tahun: "",
                    },
                    {
                      id: 4,
                      tunjangan: "Tunjangan Beras",
                      instansi: "Institut Teknologi Kalimantan",
                      dari_tahun: "2017",
                      sampai_tahun: "",
                    },
                  ]}
                />
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/tunjangan"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Pengajaran
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y text-xs">
                <Table
                  shadow={false}
                  columns={[
                    { key: "id", title: "No", dataType: "numbering" },
                    { key: "mata_kuliah", title: "Mata Kuliah" },
                    { key: "jenjang_pendidikan", title: "Jenjang Pendidikan" },
                    { key: "semester", title: "Semester" },
                  ]}
                  data={[
                    {
                      id: 1,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 2,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 3,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2022/2023 Ganjil",
                    },
                    {
                      id: 4,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 5,
                      mata_kuliah: "Wawasan Umum dan Gagasan Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 6,
                      mata_kuliah: "Teknologi IoT",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 7,
                      mata_kuliah: "Wawasan Umum dan Gagasan Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Genap",
                    },
                    {
                      id: 8,
                      mata_kuliah: "Tata Kelola Teknologi Informasi",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                    {
                      id: 9,
                      mata_kuliah: "Algoritme Pemrograman",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                    {
                      id: 10,
                      mata_kuliah: "Keprofesian Informatika",
                      jenjang_pendidikan: "S1",
                      semester: "2021/2022 Ganjil",
                    },
                  ]}
                />
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/pengajaran"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Pengabdian Masyarakat
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y text-xs">
                <Table
                  shadow={false}
                  columns={[
                    { key: "id", title: "No", dataType: "numbering" },
                    { key: "judul_litabmas", title: "Judul Litabmas" },
                    { key: "tahun_anggaran", title: "Tahun Anggaran" },
                  ]}
                  data={[
                    {
                      id: 1,
                      judul_litabmas:
                        "Pemanfaatan Sampah Plastik Serta Pewadahan Secara Komunal Di RT 042 Kelurahan Batu Ampar Balikpapan Utara",
                      tahun_anggaran: "2022",
                    },
                    {
                      id: 2,
                      judul_litabmas:
                        "Pemetaan Pembangunan Infrastruktur Telekomunikasi oleh Inspektoral Jenderal, Kementerian Komunikasi dan Informatika",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 3,
                      judul_litabmas:
                        "Pemetaan Pembangunan Infrastruktur Telekomunikasi oleh Inspektoral Jenderal, Kementerian Komunikasi dan Informatika",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 4,
                      judul_litabmas:
                        "Pembuatan Aplikasi Sistem Informasi Capaian Gotong Royong Masyarakat Kecamatan Balikpapan Utara",
                      tahun_anggaran: "2021",
                    },
                    {
                      id: 5,
                      judul_litabmas:
                        "Pendampingan Pendidikan TIK pada masyarakat Desa Padang Pangrapat sebagai desa binaan untuk meningkatkan daya saing di era society 5.0",
                      tahun_anggaran: "2020",
                    },
                  ]}
                />
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/pengabdian"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Pembicara
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="bg-blue-300 dark:bg-blue-500 p-4 rounded-xl min-h-[200px] justify-center items-center flex">
                  Tidak ada data
                </div>
                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/pembicara"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-md capitalize font-semibold drop-shadow-lg shadow-white">
                Buku Yang Diterbitkan
              </h1>
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 rounded-xl p-4 divide-y">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Judul Buku :
                  </span>
                  <span className="font-semibold">
                    Video Pembalajaran MK Keprofesian Informatika IF201431
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-500">
                    Penerbit :
                  </span>
                  <span className="font-semibold">Pribadi</span>
                </div>

                <div className="flex justify-end py-4 text-sm">
                  <Link
                    href={"/bahan-ajar"}
                    className="ml-auto bg-primary hover:bg-blue-800 px-4 py-1 rounded-xl shadow-xl text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
