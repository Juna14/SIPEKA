export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Pekerjaan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Tidak bekerja"
          },
          {
            "id": 2,
            "id_sister": 10,
            "nama": "Wirausaha"
          },
          {
            "id": 3,
            "id_sister": 11,
            "nama": "Buruh"
          },
          {
            "id": 4,
            "id_sister": 12,
            "nama": "Pensiunan"
          },
          {
            "id": 5,
            "id_sister": 2,
            "nama": "Nelayan"
          },
          {
            "id": 6,
            "id_sister": 3,
            "nama": "Petani"
          },
          {
            "id": 7,
            "id_sister": 4,
            "nama": "Peternak"
          },
          {
            "id": 8,
            "id_sister": 5,
            "nama": "PNS/TNI/Polri"
          },
          {
            "id": 9,
            "id_sister": 6,
            "nama": "Karyawan Swasta"
          },
          {
            "id": 10,
            "id_sister": 7,
            "nama": "Pedagang Kecil"
          },
          {
            "id": 11,
            "id_sister": 8,
            "nama": "Pedagang Besar"
          },
          {
            "id": 12,
            "id_sister": 9,
            "nama": "Wiraswasta"
          },
          {
            "id": 13,
            "id_sister": 98,
            "nama": "Sudah Meninggal"
          },
          {
            "id": 14,
            "id_sister": 99,
            "nama": "Lainnya"
          },
          {
            "id": 15,
            "id_sister": 13,
            "nama": "Peneliti"
          },
          {
            "id": 16,
            "id_sister": 14,
            "nama": "Tim Ahli / Konsultan"
          },
          {
            "id": 17,
            "id_sister": 15,
            "nama": "Magang"
          },
          {
            "id": 18,
            "id_sister": 16,
            "nama": "Tenaga Pengajar / Instruktur / Fasiltator"
          },
          {
            "id": 19,
            "id_sister": 17,
            "nama": "Pimpinan / Manajerial"
          }
        ]
      }
    )
}