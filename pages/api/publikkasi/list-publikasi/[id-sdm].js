export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
              "id": "00000000-0000-0000-0000-000000000000",
              "kategori_kegiatan": "Menerjemahkan/menyadur buku ilmiah yang diterbitkan (ber ISBN)",
              "judul": "Enhancing the Paddy Farmer Income Sustainability with Crop Insurance Policy",
              "quartile": "",
              "bidang_keilmuan": [],
              "jenis_publikasi": "Paten nasional",
              "tanggal": "2019-01-01",
              "asal_data": "SINTA"
            }
          ]
    })
}