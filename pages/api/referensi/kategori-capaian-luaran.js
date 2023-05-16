export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Kategori Capaian Luaran berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 6,
            "nama": "Pembicara"
          },
          {
            "id": 2,
            "id_sister": 7,
            "nama": "Visiting Scientist"
          },
          {
            "id": 3,
            "id_sister": 1,
            "nama": "Produk Teknologi Tepat Guna"
          },
          {
            "id": 4,
            "id_sister": 2,
            "nama": "Jenis Luaran Lainnya"
          },
          {
            "id": 5,
            "id_sister": 3,
            "nama": "Publikasi"
          },
          {
            "id": 6,
            "id_sister": 4,
            "nama": "HKI"
          },
          {
            "id": 7,
            "id_sister": 5,
            "nama": "Buku"
          }
        ]
      }
    )
}