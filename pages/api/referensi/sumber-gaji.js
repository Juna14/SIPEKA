export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Sumber Gaji berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "APBN"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "APBD Provinsi"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "APBD Kabupaten/Kota"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "Yayasan"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "Sekolah"
          },
          {
            "id": 6,
            "id_sister": 6,
            "nama": "Lembaga Donor"
          },
          {
            "id": 7,
            "id_sister": 99,
            "nama": "Lainnya"
          }
        ]
      }
    )
}