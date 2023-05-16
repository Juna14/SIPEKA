export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Status Kepegawaian berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "PNS"
          },
          {
            "id": 2,
            "id_sister": 3,
            "nama": "PNS Depag"
          },
          {
            "id": 3,
            "id_sister": 10,
            "nama": "NON PNS"
          },
          {
            "id": 4,
            "id_sister": 11,
            "nama": "TNI"
          },
          {
            "id": 5,
            "id_sister": 12,
            "nama": "POLRI"
          },
          {
            "id": 6,
            "id_sister": 13,
            "nama": "CPNS"
          }
        ]
      }
    )
}