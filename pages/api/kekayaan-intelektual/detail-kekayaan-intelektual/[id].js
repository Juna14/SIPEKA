export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: 
            {
                "id": "00000000-0000-0000-0000-000000000000",
                "pangkat_golongan": "III/c (Penata)",
                "sk": "53979/A3/KP/2020",
                "tanggal_mulai": "2020-04-01",
                "id_sdm": "00000000-0000-0000-0000-000000000000",
                "id_pangkat_golongan": 11,
                "pangkat": "Penata",
                "golongan": "III/c",
                "tanggal_sk": "2020-06-29",
                "masa_kerja_tahun": 6,
                "masa_kerja_bulan": 0,
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
        
    })
}