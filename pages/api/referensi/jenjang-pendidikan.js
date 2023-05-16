export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenjang Pendidikan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 6,
            "nama": "SMA / sederajat"
          },
          {
            "id": 2,
            "id_sister": 20,
            "nama": "D1"
          },
          {
            "id": 3,
            "id_sister": 21,
            "nama": "D2"
          },
          {
            "id": 4,
            "id_sister": 22,
            "nama": "D3"
          },
          {
            "id": 5,
            "id_sister": 23,
            "nama": "D4"
          },
          {
            "id": 6,
            "id_sister": 30,
            "nama": "S1"
          },
          {
            "id": 7,
            "id_sister": 31,
            "nama": "Profesi"
          },
          {
            "id": 8,
            "id_sister": 32,
            "nama": "Sp-1"
          },
          {
            "id": 9,
            "id_sister": 35,
            "nama": "S2"
          },
          {
            "id": 10,
            "id_sister": 36,
            "nama": "S2 Terapan"
          },
          {
            "id": 11,
            "id_sister": 37,
            "nama": "Sp-2"
          },
          {
            "id": 12,
            "id_sister": 40,
            "nama": "S3"
          },
          {
            "id": 13,
            "id_sister": 41,
            "nama": "S3 Terapan"
          }
        ]
      }
    )
}