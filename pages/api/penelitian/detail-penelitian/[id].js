export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: {
            "id": "00000000-0000-0000-0000-000000000000",
            "id_kategori_kegiatan": 120601,
            "judul": "Enhancing the Paddy Farmer Income Sustainability with Crop Insurance Policy",
            "id_afiliasi": "1850c92f-689c-45e4-9382-01219d35c534",
            "afiliasi": "Universitas Sumatera Utara",
            "id_kelompok_bidang": "5d35a79a-d98f-488b-aafc-0cf4c5ad1f99",
            "kelompok_bidang": "ILMU SOSIAL, POLITIK, HUMANIORA",
            "id_litabmas_sebelumnya": "dc447fa4-9c76-4430-8c22-6e131a6ffe3d",
            "litabmas_sebelumnya": "Enhancing the Paddy Farmer Income Sustainability with Crop Insurance Policy",
            "id_jenis_skim": "10bbc6bb-244b-4321-9cdb-3faab8e4c7f9",
            "jenis_skim": "Ipteks Bagi Masyarakat",
            "lokasi": "Sumatera Utara, Pulau Jawa, dan Nusa Tenggara Barat",
            "tahun_usulan": 2018,
            "tahun_kegiatan": 2019,
            "tahun_pelaksanaan": 2019,
            "lama_kegiatan": 3,
            "tahun_pelaksanaan_ke": 2,
            "dana_dikti": 0,
            "dana_perguruan_tinggi": 0,
            "dana_institusi_lain": 370850000,
            "in_kind": "",
            "sk_penugasan": "1234/SK/2019",
            "tanggal_sk_penugasan": "2019-01-01",
            "mitra_litabmas": [
              {
                "id": "00000000-0000-0000-0000-000000000000",
                "nama": "string"
              }
            ],
            "anggota": [
              {
                "nama": "ANDI BUDIANTO",
                "jenis": "Dosen",
                "id_sdm": "00000000-0000-0000-0000-000000000000",
                "id_peserta_didik": null,
                "nomor_induk_peserta_didik": null,
                "id_orang": null,
                "aktif": true,
                "peran": "Ketua"
              }
            ],
            "dokumen": [
              {
                "id": "00000000-0000-0000-0000-000000000000",
                "nama": "Dokumen Pendukung Kegiatan XYZ",
                "jenis_dokumen": "Laporan karya",
                "nama_file": "DOKUMEN1.pdf",
                "jenis_file": "application/pdf",
                "tanggal_upload": "datetime",
                "tautan": "https://kampus.ac.id/files/DOKUMEN1.pdf",
                "keterangan": null
              }
            ]
          }
    })
}