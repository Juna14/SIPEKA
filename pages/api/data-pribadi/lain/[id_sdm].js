export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Data Lain berhasil diambil",
        "data": {
          "id": 1,
          "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
          "npwp": "828655803722000",
          "nama_wp": "Tegar Palyus Fiqar"
        }
      }
    )
}