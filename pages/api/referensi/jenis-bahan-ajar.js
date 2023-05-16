export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Bahan Ajar berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 6,
            "nama": "Alat bantu"
          },
          {
            "id": 2,
            "id_sister": 7,
            "nama": "Audio visual"
          },
          {
            "id": 3,
            "id_sister": 1,
            "nama": "Buku ajar"
          },
          {
            "id": 4,
            "id_sister": 2,
            "nama": "Diktat"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "Model"
          },
          {
            "id": 6,
            "id_sister": 3,
            "nama": "Modul"
          },
          {
            "id": 7,
            "id_sister": 8,
            "nama": "Naskah tutorial"
          },
          {
            "id": 8,
            "id_sister": 4,
            "nama": "Petunjuk praktikum"
          }
        ]
      }
    )
}