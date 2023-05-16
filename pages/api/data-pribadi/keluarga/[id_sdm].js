export default function handler(req,res) {
    return res.status(200).json(
      {
        "status": true,
        "message": "Keluarga berhasil diambil",
        "data": [
          {
            "id": 1,
            "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
            "status_kawin": "Kawin",
            "id_status_kawin": 1,
            "nama_pasangan": "Umi Sholikah",
            "nip_pasangan": "198904242019032020",
            "id_pekerjaan_pasangan": 5,
            "jenispekerjaan": {
              "id_sister": 5,
              "nama": "PNS/TNI/Polri"
            }
          }
        ]
      }
    )
}