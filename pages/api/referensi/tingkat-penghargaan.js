export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Tingkat Penghargaan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Sekolah"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "Kecamatan"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "Kab/kota"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "Propinsi"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "Nasional"
          },
          {
            "id": 6,
            "id_sister": 6,
            "nama": "Internasional"
          },
          {
            "id": 7,
            "id_sister": 9,
            "nama": "Lainnya"
          }
        ]
      }
    )
}