export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Golongan Pangkat berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "I/a (Juru Muda)"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "I/b (Juru Muda Tk. I)"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "I/c (Juru)"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "I/d (Juru Tk. I)"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "II/a (Pengatur Muda)"
          },
          {
            "id": 6,
            "id_sister": 6,
            "nama": "II/b (Pengatur Muda Tk. I)"
          },
          {
            "id": 7,
            "id_sister": 7,
            "nama": "II/c (Pengatur)"
          },
          {
            "id": 8,
            "id_sister": 8,
            "nama": "II/d (Pengatur Tk. I)"
          },
          {
            "id": 9,
            "id_sister": 9,
            "nama": "III/a (Penata Muda)"
          },
          {
            "id": 10,
            "id_sister": 10,
            "nama": "III/b (Penata Muda Tk. I)"
          },
          {
            "id": 11,
            "id_sister": 11,
            "nama": "III/c (Penata)"
          },
          {
            "id": 12,
            "id_sister": 12,
            "nama": "III/d (Penata Tk. I)"
          },
          {
            "id": 13,
            "id_sister": 13,
            "nama": "IV/a (Pembina)"
          },
          {
            "id": 14,
            "id_sister": 14,
            "nama": "IV/b (Pembina Tk. I)"
          },
          {
            "id": 15,
            "id_sister": 15,
            "nama": "IV/c (Pembina Utama Muda)"
          },
          {
            "id": 16,
            "id_sister": 16,
            "nama": "IV/d (Pembina Utama Madya)"
          },
          {
            "id": 17,
            "id_sister": 17,
            "nama": "IV/e (Pembina Utama)"
          }
        ]
      }
    )
}