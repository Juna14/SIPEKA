export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: {
            "id": "00000000-0000-0000-0000-000000000000",
            "status_kepegawaian": "PNS",
            "ikatan_kerja": "Dosen Tetap",
            "unit_kerja": "Ilmu Komputer",
            "jenjang_pendidikan": "S1",
            "perguruan_tinggi": "Universitas Jakarta",
            "tanggal_mulai": "2018-03-01",
            "tanggal_keluar": null,
            "id_sdm": "00000000-0000-0000-0000-000000000000",
            "surat_tugas": "4321/A2.1/KP/2018",
            "tanggal_surat_tugas": "2018-02-28",
            "jenis_keluar": null,
            "id_jenis_keluar": null,
            "id_status_kepegawaian": 1,
            "id_ikatan_kerja": "A",
            "id_perguruan_tinggi": "828fb966-3733-430e-86ff-909b764e2523",
            "id_unit_kerja": "c6228784-0b80-4e0a-b72d-d3203e44d907"
          }
    })
}