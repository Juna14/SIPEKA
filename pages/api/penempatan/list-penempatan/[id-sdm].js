export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
              "id": "00000000-0000-0000-0000-000000000000",
              "status_kepegawaian": "PNS",
              "ikatan_kerja": "Dosen Tetap",
              "unit_kerja": "Ilmu Komputer",
              "jenjang_pendidikan": "S1",
              "perguruan_tinggi": "Universitas Jakarta",
              "tanggal_mulai": "2018-03-01",
              "tanggal_keluar": null
            }
          ]
    })
}