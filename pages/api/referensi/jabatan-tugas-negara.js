export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jabatan Tugas Negara berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 99,
            "nama": "Lainnya"
          },
          {
            "id": 2,
            "id_sister": 101,
            "nama": "Kepala Dinas"
          },
          {
            "id": 3,
            "id_sister": 102,
            "nama": "Kepala Badan"
          },
          {
            "id": 4,
            "id_sister": 103,
            "nama": "Anggota BPK"
          },
          {
            "id": 5,
            "id_sister": 104,
            "nama": "Ketua MA"
          },
          {
            "id": 6,
            "id_sister": 105,
            "nama": "Wakil Ketua MA"
          },
          {
            "id": 7,
            "id_sister": 106,
            "nama": "Ketua Muda MA"
          },
          {
            "id": 8,
            "id_sister": 107,
            "nama": "Hakim MA"
          },
          {
            "id": 9,
            "id_sister": 108,
            "nama": "Anggota DPA"
          },
          {
            "id": 10,
            "id_sister": 109,
            "nama": "Menteri"
          },
          {
            "id": 11,
            "id_sister": 110,
            "nama": "Duta Besar"
          },
          {
            "id": 12,
            "id_sister": 111,
            "nama": "Kepala Pusat"
          },
          {
            "id": 13,
            "id_sister": 112,
            "nama": "Kepala Biro"
          }
        ]
      }
    )
}