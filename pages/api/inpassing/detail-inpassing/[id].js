export default function handler(req,res) {
    return res.status(200).json(
        {
        status: true,
        message: "Bla bla",
        data: [
            {
                "id": "00000000-0000-0000-0000-000000000000",
                "pangkat_golongan": "IV/b (Pembina Tk. I)",
                "sk": "16261/A2.3/KP/2018",
                "tanggal_sk": "2018-04-23",
                "tanggal_mulai": "2018-04-01",
                "id_sdm": "00000000-0000-0000-0000-000000000000",
                "id_pangkat_golongan": 14,
                "pangkat": "Pembina Tk. I",
                "golongan": "IV/b",
                "angka_kredit": 596.53,
                "masa_kerja_tahun": 13,
                "masa_kerja_bulan": 2,
                "dokumen": [
                  {
                    "id": "00000000-0000-0000-0000-000000000000",
                    "nama": "Dokumen Pendukung Kegiatan XYZ",
                    "jenis_dokumen": "Laporan karya",
                    "nama_file": "DOKUMEN1.pdf",
                    "jenis_file": "application/pdf",
                    "tanggal_upload": "datetime",
                    "tautan": "https://kampus.ac.id/files/DOKUMEN1.pdf",
                    "keterangan": null
                  }
                ]
              }
        ]
    }
    )
}