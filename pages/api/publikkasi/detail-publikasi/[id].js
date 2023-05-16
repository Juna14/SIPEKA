export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: 
        {
          "id": "00000000-0000-0000-0000-000000000000",
          "kategori_kegiatan": "Menerjemahkan/menyadur buku ilmiah yang diterbitkan (ber ISBN)",
          "judul": "Enhancing the Paddy Farmer Income Sustainability with Crop Insurance Policy",
          "quartile": "",
          "bidang_keilmuan": [],
          "jenis_publikasi": "Paten nasional",
          "tanggal": "2019-01-01",
          "id_kategori_kegiatan": 111201,
          "id_jenis_publikasi": 41,
          "kategori_capaian_luaran": "HKI",
          "id_kategori_capaian_luaran": 4,
          "judul_litabmas": "Sustainable Agriculture",
          "id_litabmas": "d69d84f3-ebcd-4cdc-a125-4ec626224b53",
          "nomor_paten": "IDP000063465",
          "pemberi_paten": "Indonesia",
          "penerbit": null,
          "isbn": null,
          "jumlah_halaman": null,
          "tautan": "https://example.org/",
          "keterangan": "",
          "penulis": [
            {
              "nama": "ANDI BUDIANTO",
              "jenis": "Dosen",
              "id_sdm": "00000000-0000-0000-0000-000000000000",
              "id_peserta_didik": null,
              "nomor_induk_peserta_didik": null,
              "id_orang": null,
              "urutan": 1,
              "afiliasi": "Departemen Ilmu Komputer, Universitas Bogor",
              "corresponding_author": true,
              "peran": "Penulis"
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
          ],
          "judul_artikel": "",
          "judul_asli": "",
          "nama_jurnal": "International Journal of Engineering and Technology",
          "halaman": "1024-1031",
          "edisi": "string",
          "volume": 5,
          "nomor": 1,
          "doi": "10.3923/jest.2014.245.265",
          "issn": null,
          "e_issn": null,
          "seminar": false,
          "prosiding": false,
          "asal_data": "SINTA"
        } 
    })
}