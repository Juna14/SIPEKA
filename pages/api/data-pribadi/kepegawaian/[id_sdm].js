export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Kepegawaian berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
            "sk_cpns": "3256/M/KP/2019",
            "tanggal_sk_cpns": "2019-03-01",
            "sk_tmmd": "9746/IT10R/KP11/2017",
            "tmmd": "2017-10-02",
            "id_sumber_gaji": 1,
            "sumbergaji": {
              "id_sister": 1,
              "nama": "APBN"
            },
            "pegawai": {
              "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
              "nip": "199009072019031014",
              "nidn": "0007099001"
            }
          }
        ]
      }
    )
}