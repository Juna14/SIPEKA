export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Diklat berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 23,
            "nama": "Pelatihan Profesional"
          },
          {
            "id": 2,
            "id_sister": 80,
            "nama": "Lemhanas"
          },
          {
            "id": 3,
            "id_sister": 1,
            "nama": "Diklat Prajabatan"
          },
          {
            "id": 4,
            "id_sister": 13,
            "nama": "Diklat Kepemimpinan"
          },
          {
            "id": 5,
            "id_sister": 22,
            "nama": "Academic Exchange"
          }
        ]
      }
    )
}