export default function handler(req,res) {
    res.status(200).json(
        {
            "status": true,
            "message": "Agama berhasil diambil",
            "data": [
              {
                "id": 1,
                "id_sister": 1,
                "nama": "Islam"
              },
              {
                "id": 2,
                "id_sister": 2,
                "nama": "Kristen"
              },
              {
                "id": 3,
                "id_sister": 4,
                "nama": "Hindu"
              },
              {
                "id": 4,
                "id_sister": 5,
                "nama": "Budha"
              },
              {
                "id": 5,
                "id_sister": 98,
                "nama": "Tidak diisi"
              },
              {
                "id": 6,
                "id_sister": 99,
                "nama": "Lainnya"
              },
              {
                "id": 7,
                "id_sister": 6,
                "nama": "Khonghucu"
              },
              {
                "id": 8,
                "id_sister": 3,
                "nama": "Katolik"
              }
            ]
        }
    )
}