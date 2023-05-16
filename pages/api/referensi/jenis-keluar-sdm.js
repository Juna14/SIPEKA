export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Keluar SDM berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": "2",
            "nama": "Mutasi"
          },
          {
            "id": 2,
            "id_sister": "3",
            "nama": "Dikeluarkan"
          },
          {
            "id": 3,
            "id_sister": "4",
            "nama": "Mengundurkan diri"
          },
          {
            "id": 4,
            "id_sister": "6",
            "nama": "Wafat"
          },
          {
            "id": 5,
            "id_sister": "8",
            "nama": "Alih Fungsi"
          },
          {
            "id": 6,
            "id_sister": "9",
            "nama": "Pensiun"
          }
        ]
      }
    )
}