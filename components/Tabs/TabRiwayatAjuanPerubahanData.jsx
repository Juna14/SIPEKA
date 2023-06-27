import React from "react";
import { Action, Tab, Table } from "..";

const TabRiwayatAjuanPerubahanData = ({ title }) => {
  return (
    <Tab
      title={title}
      tabs={["Draft", "Diajukan", "Disetujui", "Ditolak", "Ditangguhkan"]}
      contents={[
        <Table
          key={1}
          columns={[
            {
              key: "tanggal_dibuat",
              title: "Tanggal Dibuat",
              render: (val) => dateFormater(val.tanggal_dibuat),
            },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={2}
          columns={[
            {
              key: "tanggal_diajukan",
              title: "Tanggal Diajukan",
              render: (val) => dateFormater(val.tanggal_diajukan),
            },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={3}
          columns={[
            {
              key: "tanggal_diajukan",
              title: "Tanggal Diajukan",
              render: (val) => dateFormater(val.tanggal_diajukan),
            },
            {
              key: "tanggal_disetujui",
              title: "Tanggal Disetujui",
              render: (val) => dateFormater(val.tanggal_disetujui),
            },
            { key: "keterangan_perubahan", title: "Keterangan Perubahan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={4}
          columns={[
            {
              key: "tanggal_diajukan",
              title: "Tanggal Diajukan",
              render: (val) => dateFormater(val.tanggal_diajukan),
            },
            {
              key: "tanggal_ditolak",
              title: "Tanggal Ditolak",
              render: (val) => dateFormater(val.tanggal_ditolak),
            },
            { key: "keterangan_penolakan", title: "Keterangan Penolakan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
        <Table
          key={5}
          columns={[
            {
              key: "tanggal_diajukan",
              title: "Tanggal Diajukan",
              render: (val) => dateFormater(val.tanggal_diajukan),
            },
            {
              key: "tanggal_ditangguhkan",
              title: "Tanggal Ditangguhkan",
              render: (val) => dateFormater(val.tanggal_ditangguhkan),
            },
            { key: "keterangan_penangguhan", title: "Keterangan Penangguhan" },
            { key: "status", title: "Status" },
            { key: "umur_ajuan", title: "Umur Ajuan ( hari )" },
            {
              key: "id",
              title: "aksi",
              align: "center",
              render: (val) => <Action param={val} />,
            },
          ]}
        />,
      ]}
    />
  );
};

export default TabRiwayatAjuanPerubahanData;
