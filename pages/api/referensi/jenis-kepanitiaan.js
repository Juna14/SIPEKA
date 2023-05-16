export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Jenis Kepanitiaan berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sister": 1,
            "nama": "Panitia/badan pada perguruan tinggi"
          },
          {
            "id": 2,
            "id_sister": 2,
            "nama": "Panitia/badan pada lembaga pemerintah"
          },
          {
            "id": 3,
            "id_sister": 3,
            "nama": "Delegasi nasional ke pertemuan internasional"
          },
          {
            "id": 4,
            "id_sister": 4,
            "nama": "Panitia pada pertemuan ilmiah"
          },
          {
            "id": 5,
            "id_sister": 5,
            "nama": "Tim penilai jabatan akademik dosen"
          },
          {
            "id": 6,
            "id_sister": 9999,
            "nama": "Panitia lainnya"
          },
          {
            "id": 7,
            "id_sister": 6,
            "nama": "Sebagai anggota"
          }
        ]
      }
    )
}