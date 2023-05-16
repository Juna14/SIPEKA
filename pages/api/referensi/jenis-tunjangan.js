export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Tunjangan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Tunjangan Profesi Guru"
          },
          {
            "id": 2,
            "id_sister": 10,
            "nama": "Tunjangan Hari Tua"
          },
          {
            "id": 3,
            "id_sister": 11,
            "nama": "Bantuan peningkatan  kulifikasi akademik"
          },
          {
            "id": 4,
            "id_sister": 12,
            "nama": "Tunjangan Guru Daerah khusus"
          },
          {
            "id": 5,
            "id_sister": 13,
            "nama": "Tunjangan Fungsional non PNS "
          },
          {
            "id": 6,
            "id_sister": 14,
            "nama": "Tunjangan  Pendidikan Khusus & Layanan Khusus"
          },
          {
            "id": 7,
            "id_sister": 2,
            "nama": "Tunjangan Anak"
          },
          {
            "id": 8,
            "id_sister": 3,
            "nama": "Tunjangan Istri/Suami"
          },
          {
            "id": 9,
            "id_sister": 4,
            "nama": "Tunjangan Beras"
          },
          {
            "id": 10,
            "id_sister": 5,
            "nama": "Tunjangan Umum PNS"
          },
          {
            "id": 11,
            "id_sister": 6,
            "nama": "Tunjangan Khusus Guru/Dosen"
          },
          {
            "id": 12,
            "id_sister": 7,
            "nama": "Tunjangan Medis"
          },
          {
            "id": 13,
            "id_sister": 8,
            "nama": "Tunjangan Umum PNS"
          },
          {
            "id": 14,
            "id_sister": 9,
            "nama": "Tunjangan Pegawai Non PNS"
          },
          {
            "id": 15,
            "id_sister": 99,
            "nama": "Lainnya"
          }
        ]
      }
    )
}