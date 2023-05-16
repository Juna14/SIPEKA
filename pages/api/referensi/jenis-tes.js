export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Tes berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 11,
            "nama": "IELTS, maks : 9.00"
          },
          {
            "id": 2,
            "id_sister": 29,
            "nama": "TOEFL CBT, maks : 300.00"
          },
          {
            "id": 3,
            "id_sister": 12,
            "nama": "TOEFL iBT, maks : 120.00"
          },
          {
            "id": 4,
            "id_sister": 13,
            "nama": "TOEFL ITP, maks : 677.00"
          },
          {
            "id": 5,
            "id_sister": 15,
            "nama": "TOEP-TEFLIN, maks : 100.00"
          }
        ]
      }
    )
}