export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Beasiswa berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Prestasi"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "Kemiskinan"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "Pendidikan"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "Unggulan"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "Ikatan Dinas"
          },
          {
            "id": 6,
            "id_sister": 6,
            "nama": "Peningkatan Karir"
          },
          {
            "id": 7,
            "id_sister": 99,
            "nama": "Lainnya"
          }
        ]
      }
    )
}