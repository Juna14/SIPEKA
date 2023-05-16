export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Ikatan Kerja berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": "A",
            "nama": "Dosen Tetap"
          },
          {
            "id": 2,
            "id_sister": "B",
            "nama": "Dosen PNS DPK"
          },
          {
            "id": 3,
            "id_sister": "E",
            "nama": "Dokter Pendidik Klinis"
          },
          {
            "id": 4,
            "id_sister": "F",
            "nama": "Dosen Tetap BH"
          },
          {
            "id": 5,
            "id_sister": "G",
            "nama": "Dosen Tidak Tetap"
          },
          {
            "id": 6,
            "id_sister": "H",
            "nama": "P3K ASN"
          },
          {
            "id": 7,
            "id_sister": "I",
            "nama": "Dosen dengan Perjanjian Kerja"
          }
        ]
      }
    )
}