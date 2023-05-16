export default function handler(req,res) {
  res.status(200).json(
    {
      status: true,
      message: "Bidang Ilmu berhasil diambil",
      data: [
        {
          id: 1,
          id_sdm: "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
          urutan: "1",
          id_kelompok_bidang: "b6b80f8f-3480-457b-9996-e8b08d277c08",
          kelompokbidang: {
            id_sister: "b6b80f8f-3480-457b-9996-e8b08d277c08",
            nama: "[140408] Teknologi Informasi dan Komunikasi - Teknik Sistem Informasi -- Keamanan Informasi"
          }
        }
      ]
    }
  )
}