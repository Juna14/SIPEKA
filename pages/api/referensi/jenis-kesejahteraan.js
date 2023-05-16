export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Kesejahteraan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Asuransi Kesejahteraan"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "Dana Pensiun"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "Jamkesmas"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "Jamsostek"
          },
          {
            "id": 5,
            "id_sister": 9,
            "nama": "Lainnya"
          }
        ]
      }
    )
}