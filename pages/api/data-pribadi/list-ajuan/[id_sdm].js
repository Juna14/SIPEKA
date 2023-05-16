
  export default function handler(req,res) {
    res.status(200).json(
        {
            "status": true,
            "message": "Ajuan berhasil diambil",
            "data": [
              {
                "id": 1,
                "id_sister": "1404cf57-011d-4fb8-8c90-9ffbdf369d83",
                "id_data_master": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
                "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
                "tanggal_ajuan": "2021-06-25 09:20:14",
                "tanggal_verifikasi": "2021-07-16 06:38:51",
                "jenis_ajuan": "Ubah",
                "keterangan": "-",
                "umur": 18,
                "status": "Disetujui Subdit Kompetensi SDM Kemenristekdikti",
                "detail_perubahan": "{\"sk_tmmd_lama\":\"9746\\/IT10R\\/KP11\\/2017\",\"sk_tmmd_baru\":null}",
                "dokumen": "[{\"id\":\"80e87be5-1ca0-40e1-8391-109bdce1381f\",\"nama\":\"KK Tegar palyus fiqar\",\"jenis_dokumen\":\"Kartu Keluarga\",\"nama_file\":\"kk baru.pdf\",\"jenis_file\":\"application\\/pdf\",\"tanggal_upload\":\"2021-06-25 09:21:16\",\"tautan\":null,\"keterangan\":null},{\"id\":\"49819152-bbd6-479c-91c0-bc814737be37\",\"nama\":\"SK PNS Umi Sholikah\",\"jenis_dokumen\":\"Lainnya\",\"nama_file\":\"43_SK PNS UMI SHOLIKAH (2).pdf\",\"jenis_file\":\"application\\/pdf\",\"tanggal_upload\":\"2021-06-25 09:20:14\",\"tautan\":\"SK PNS Umi Sholikah\",\"keterangan\":null}]"
              },
            ]
          }
    )
}