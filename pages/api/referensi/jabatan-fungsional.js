export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jabatan Fungsional berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 31,
            "nama": "Tenaga Pengajar"
          },
          {
            "id": 2,
            "id_sister": 40,
            "nama": "Asisten Ahli (100.00)"
          },
          {
            "id": 3,
            "id_sister": 41,
            "nama": "Asisten Ahli (150.00)"
          },
          {
            "id": 4,
            "id_sister": 43,
            "nama": "Lektor (200.00)"
          },
          {
            "id": 5,
            "id_sister": 44,
            "nama": "Lektor (300.00)"
          },
          {
            "id": 6,
            "id_sister": 46,
            "nama": "Lektor Kepala (400.00)"
          },
          {
            "id": 7,
            "id_sister": 47,
            "nama": "Lektor Kepala (550.00)"
          },
          {
            "id": 8,
            "id_sister": 48,
            "nama": "Lektor Kepala (700.00)"
          },
          {
            "id": 9,
            "id_sister": 50,
            "nama": "Profesor (850.00)"
          },
          {
            "id": 10,
            "id_sister": 51,
            "nama": "Profesor (1050.00)"
          }
        ]
      }
    )
}