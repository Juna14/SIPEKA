export default function handler(req,res) {
     res.status(200).json(
      {
        "status": true,
        "message": "Profil berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
            "jenis_kelamin": "L",
            "tanggal_lahir": "1990-09-07",
            "nama_ibu_kandung": "Sukartini",
            "pegawai": {
              "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
              "nama_sdm": "TEGAR PALYUS FIQAR",
              "nidn": "0007099001"
            }
          }
        ]
      }
     )
}