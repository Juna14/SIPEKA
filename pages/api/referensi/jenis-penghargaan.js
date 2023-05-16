export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Penghargaan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 9,
            "nama": "Lainnya"
          }
        ]
      }
    )
}