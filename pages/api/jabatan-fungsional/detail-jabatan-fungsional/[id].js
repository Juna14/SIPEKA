export default function handler(req,res) {
    res.status(200).json(
        {
            status: true,
            message: "bla bla",
            data: 
            {
                "id": "00000000-0000-0000-0000-000000000000",
                "jabatan_fungsional": "Asisten Ahli (150.00)",
                "sk": "47/IT3/KP.01.00/2020",
                "tanggal_mulai": "2020-03-01",
                "id_sdm": "00000000-0000-0000-0000-000000000000",
                "id_jabatan_fungsional": 41,
                "angka_kredit": 150,
                "kelebihan_pengajaran": 5.5,
                "kelebihan_penelitian": null,
                "kelebihan_pengabdian": null,
                "kelebihan_penunjang": null,
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
        }
    )
}