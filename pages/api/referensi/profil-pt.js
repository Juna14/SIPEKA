export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Profil Perguruan Tinggi berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": "3c6900f4-a801-4f4c-abe1-d1485589b07f",
            "kode_perguruan_tinggi": "002013  ",
            "nama_perguruan_tinggi": "Institut Teknologi Kalimantan",
            "telepon": " 0542-8530801",
            "faximile": " 0542-8530800",
            "email": "humas@itk.ac.id",
            "website": "www.itk.ac.id",
            "jalan": null,
            "dusun": null,
            "rt": 0,
            "rw": 0,
            "kelurahan": "-",
            "kode_pos": null,
            "id_wilayah": "166100  ",
            "nama_wilayah": "Kota Balikpapan",
            "lintang": "-1.1504216",
            "bujur": "116.8587103",
            "sk_pendirian": "125 Tahun 2014",
            "tanggal_sk_pendirian": "2014-10-09",
            "id_status_milik": "1",
            "nama_status_milik": "Pemerintah Pusat",
            "status_perguruan_tinggi": "A",
            "sk_izin_operasional": null,
            "tanggal_izin_operasional": null
          }
        ]
      }
    )
}