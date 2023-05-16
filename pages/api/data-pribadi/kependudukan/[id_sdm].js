export default function handler(req,res) {
    return res.status(200).json(
      {
        "status": true,
        "message": "Kependudukan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
            "nik": "6472050709900005",
            "id_agama": 1,
            "kode_negara": "ID",
            "negara": {
              "id_sister": "ID",
              "nama": "Indonesia"
            },
            "agama": {
              "id_sister": 1,
              "nama": "Islam"
            }
          }
        ]
      }
    )
      
}