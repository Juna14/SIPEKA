export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
          {
            "id": "00000000-0000-0000-0000-000000000000",
            "judul": "Enhancing the Paddy Farmer Income Sustainability with Crop Insurance Policy",
            "bidang_keilmuan": [],
            "tahun_pelaksanaan": 2019,
            "lama_kegiatan": 3
          }
        ]
    })
}