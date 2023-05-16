export default function handler(req,res) {
    res.status(200).json(
      {
        "status": true,
        "message": "Kategori Kegiatan berhasil diambil",
        "data": [
          {
            "id": 1,
            "parent_id": null,
            "id_sister": 100000,
            "nama": "Pendidikan"
          },
          {
            "id": 2,
            "parent_id": 100000,
            "id_sister": 100100,
            "nama": "Pendidikan Formal"
          },
          {
            "id": 3,
            "parent_id": 100100,
            "id_sister": 100101,
            "nama": "Doktor"
          },
          {
            "id": 4,
            "parent_id": 100100,
            "id_sister": 100102,
            "nama": "Magister (S2)/sederajat"
          },
          {
            "id": 5,
            "parent_id": 100000,
            "id_sister": 100200,
            "nama": "Melaksanakan Pelatihan Dasar (Prajabatan) golongan III"
          },
          {
            "id": 6,
            "parent_id": null,
            "id_sister": 110000,
            "nama": "Pelaksanaan Pendidikan"
          },
          {
            "id": 7,
            "parent_id": 110000,
            "id_sister": 110100,
            "nama": "melaksanakan perkuliahan (pengajaran, tutorial, tatap muka, dan/atau daring) dalam rangka melaksanakan metode pembelajaran student centered learning (seperti problembased learning atau project basedlearning), membimbing/menguji dalam menghasilkan disertas"
          },
          {
            "id": 8,
            "parent_id": 110100,
            "id_sister": 110101,
            "nama": "Asisten Ahli dengan beban mengajar 10 sks pertama"
          },
          {
            "id": 9,
            "parent_id": 110100,
            "id_sister": 110102,
            "nama": "Asisten Ahli dengan beban mengajar 2 sks berikutnya"
          },
          {
            "id": 10,
            "parent_id": 110100,
            "id_sister": 110103,
            "nama": "Lektor/Lektor Kepala/Profesor dengan beban mengajar 10 sks pertama"
          },
          {
            "id": 11,
            "parent_id": 110100,
            "id_sister": 110104,
            "nama": "Lektor/Lektor Kepala/Profesor dengan beban mengajar 2 sks berikutnya"
          },
          {
            "id": 12,
            "parent_id": 110100,
            "id_sister": 110105,
            "nama": "Melakukan pengajaran untuk peserta pendidikan dokter melalui tindakan medik spesialistik"
          },
          {
            "id": 13,
            "parent_id": 110100,
            "id_sister": 110106,
            "nama": "Melakukan pengajaran konsultasi spesialis kepada peserta pendidikan dokter"
          },
          {
            "id": 14,
            "parent_id": 110100,
            "id_sister": 110107,
            "nama": "Melakukan pemeriksaan luar dengan pembimbingan terhadap peserta pendidikan dokter"
          },
          {
            "id": 15,
            "parent_id": 110100,
            "id_sister": 110108,
            "nama": "Melakukan pemeriksaan dalam dengan pembimbingan terhadap peserta pendidikan dokter"
          },
          {
            "id": 16,
            "parent_id": 110100,
            "id_sister": 110109,
            "nama": "Menjadi saksi ahli dengan pembimbingan terhadap peserta pendidikan dokter"
          },
          {
            "id": 17,
            "parent_id": 110100,
            "id_sister": 110150,
            "nama": "Kegiatan pelaksanaan pendidikan untuk pendidikan dokter klinis"
          },
          {
            "id": 18,
            "parent_id": 110150,
            "id_sister": 110151,
            "nama": "Melakukan pengajaran untuk peserta pendidikan dokter melalui tindakan medik spesialistik"
          },
          {
            "id": 19,
            "parent_id": 110150,
            "id_sister": 110152,
            "nama": "Melakukan pengajaran Konsultasi spesialis kepada peserta pendidikan dokter, melakukan pemeriksaan luar dengan pembimbingan terhadap peserta pendidikan dokter "
          },
          {
            "id": 20,
            "parent_id": 110150,
            "id_sister": 110153,
            "nama": "Melakukan pemeriksaan dalam dengan pembimbingan terhadap peserta pendidikan dokter "
          },
          {
            "id": 21,
            "parent_id": 110150,
            "id_sister": 110154,
            "nama": "Menjadi saksi ahli dengan pembimbingan terhadap peserta pendidikan dokter"
          },
          {
            "id": 22,
            "parent_id": 110000,
            "id_sister": 110200,
            "nama": "Membimbing seminar mahasiswa"
          },
          {
            "id": 23,
            "parent_id": 110000,
            "id_sister": 110300,
            "nama": "Membimbing Kuliah Kerja Nyata, Praktek Kerja Nyata, Praktek Kerja Lapangan, termasuk membimbing pelatihan militer mahasiswa, pertukaran mahasiswa,  Magang, kuliah berbasis penelitian, wirausaha, dan bentuk lain pengabdian kepada masyarakat, dan sejenisnya"
          },
          {
            "id": 24,
            "parent_id": 110000,
            "id_sister": 110400,
            "nama": "Membimbing dan ikut membimbing dalam menghasilkan disertasi, tesis, skripsi dan laporan akhir studi yang sesuai dengan bidang tugasnya"
          },
          {
            "id": 25,
            "parent_id": 110400,
            "id_sister": 110401,
            "nama": "Disertasi (pembimbing utama)"
          },
          {
            "id": 26,
            "parent_id": 110400,
            "id_sister": 110402,
            "nama": "Tesis (pembimbing utama)"
          },
          {
            "id": 27,
            "parent_id": 110400,
            "id_sister": 110403,
            "nama": "Skripsi (pembimbing utama)"
          },
          {
            "id": 28,
            "parent_id": 110400,
            "id_sister": 110404,
            "nama": "Laporan/tugas akhir studi (pembimbing utama)"
          },
          {
            "id": 29,
            "parent_id": 110400,
            "id_sister": 110405,
            "nama": "Disertasi (pembimbing pendamping)"
          },
          {
            "id": 30,
            "parent_id": 110400,
            "id_sister": 110406,
            "nama": "Tesis (pembimbing pendamping)"
          },
          {
            "id": 31,
            "parent_id": 110400,
            "id_sister": 110407,
            "nama": "Skripsi (pembimbing pendamping)"
          },
          {
            "id": 32,
            "parent_id": 110400,
            "id_sister": 110408,
            "nama": "Laporan akhir studi (pembimbing pendamping)"
          },
          {
            "id": 33,
            "parent_id": 110000,
            "id_sister": 110500,
            "nama": "Bertugas sebagai penguji pada ujian akhir/profesi"
          },
          {
            "id": 34,
            "parent_id": 110500,
            "id_sister": 110501,
            "nama": "Ketua penguji"
          },
          {
            "id": 35,
            "parent_id": 110500,
            "id_sister": 110502,
            "nama": "Anggota penguji"
          },
          {
            "id": 36,
            "parent_id": 110000,
            "id_sister": 110600,
            "nama": "Membina kegiatan mahasiswa di bidang akademik dan kemahasiswaan, termasuk dalam kegiatan ini adalah membimbing mahasiswa menghasilkan produk saintifik, membimbing mahasiswa mengikuti kompetisi di bidang akademik dan kemahasiswaan"
          },
          {
            "id": 37,
            "parent_id": 110600,
            "id_sister": 110601,
            "nama": "Melakukan pembinaan kegiatan mahasiswa di bidang akademik (PA) dan kemahasiswaan (BEM, Maperwa, dan lain-lain)"
          },
          {
            "id": 38,
            "parent_id": 110600,
            "id_sister": 110602,
            "nama": "Membimbing mahasiswa menghasilkan produk saintifik bereputasi dan mendapat pengakuan tingkat Internasional"
          },
          {
            "id": 39,
            "parent_id": 110600,
            "id_sister": 110603,
            "nama": "Membimbing mahasiswa menghasilkan produk saintifik bereputasi dan mendapat pengakuan tingkat Nasional"
          },
          {
            "id": 40,
            "parent_id": 110600,
            "id_sister": 110604,
            "nama": "Membimbing mahasiswa mengikuti kompetisi dibidang akademik dan kemahasiswaan bereputasi dan mencapai juara tingkat Internasional"
          },
          {
            "id": 41,
            "parent_id": 110600,
            "id_sister": 110605,
            "nama": "Membimbing mahasiswa mengikuti kompetisi dibidang akademik dan kemahasiswaan bereputasi dan mencapai juara tingkat Nasional"
          },
          {
            "id": 42,
            "parent_id": 110000,
            "id_sister": 110700,
            "nama": "Melakukan kegiatan pengembangan program kuliah tatap muka/daring (RPS, perangkat pembelajaran)"
          },
          {
            "id": 43,
            "parent_id": 110000,
            "id_sister": 110800,
            "nama": "Mengembangkan bahan kuliah"
          },
          {
            "id": 44,
            "parent_id": 110800,
            "id_sister": 110801,
            "nama": "Buku Ajar (cetak atau elektronik) "
          },
          {
            "id": 45,
            "parent_id": 110800,
            "id_sister": 110802,
            "nama": "Diktat, modul, petunjuk praktikum, model, alat bantu, audio visual, naskah tutorial"
          },
          {
            "id": 46,
            "parent_id": 110800,
            "id_sister": 110803,
            "nama": "mengembangkan bahan pengajaran/modul/ bahan kuliah yang mempunyai nilai kebaharuan/manual/ pedoman akademik/pedoman pemagangan/pedoman pembelajaran dalam bentuk case study/problem based learning/project based learning"
          },
          {
            "id": 47,
            "parent_id": 110800,
            "id_sister": 110804,
            "nama": "Mengembangkan bahan pengajaran/modul/ bahan kuliah yang mempunyai nilai kebaharuan/manual/ pedoman akademik/pedoman pemagangan/pedoman pembelajaran"
          },
          {
            "id": 48,
            "parent_id": 110000,
            "id_sister": 110900,
            "nama": "Melakukan kegiatan orasi ilmiah pada perguruan tinggi"
          },
          {
            "id": 49,
            "parent_id": 110000,
            "id_sister": 111000,
            "nama": "Menduduki jabatan perguruan tinggi "
          },
          {
            "id": 50,
            "parent_id": 111000,
            "id_sister": 111001,
            "nama": "Rektor"
          },
          {
            "id": 51,
            "parent_id": 111000,
            "id_sister": 111002,
            "nama": "Kepala LLDIKTI/ Direktur Politeknik/Wakil Rektor/Dekan/Direktur Pascasarjana/Ketua Senat Universitas"
          },
          {
            "id": 52,
            "parent_id": 111000,
            "id_sister": 111003,
            "nama": "Ketua Sekolah Tinggi/Ketua Lembaga/ Wakil Dekan/Wakil Direktur Pascasarjana/Ketua Senat Fakultas"
          },
          {
            "id": 53,
            "parent_id": 111000,
            "id_sister": 111004,
            "nama": "Wakil Ketua Sekolah Tinggi/Wakil Direktur Politeknik/Direktur Akademi"
          },
          {
            "id": 54,
            "parent_id": 111000,
            "id_sister": 111005,
            "nama": "Wakil Direktur Akademi/Sekretaris Lembaga/ Ketua Jurusan/ Departemen/Bagian/Program studi"
          },
          {
            "id": 55,
            "parent_id": 111000,
            "id_sister": 111006,
            "nama": "Kepala Laboratorium/Sekretaris Jurusan/Departemen/Bagian"
          },
          {
            "id": 56,
            "parent_id": 111000,
            "id_sister": 111007,
            "nama": "Pembantu direktur akademi/ketua jurusan/ketua prodi pada universitas/politeknik/akademi, sekretaris jurusan/bagian pada universitas/institut/sekolah tinggi"
          },
          {
            "id": 57,
            "parent_id": 111000,
            "id_sister": 111008,
            "nama": "Sekretaris jurusan pada politeknik/akademi dan kepala laboratorium (bengkel) universitas/institut/sekolah tinggi/politeknik/akademi"
          },
          {
            "id": 58,
            "parent_id": 110000,
            "id_sister": 111100,
            "nama": "Membimbing dosen yang lebih rendah jabatannya "
          },
          {
            "id": 59,
            "parent_id": 111100,
            "id_sister": 111101,
            "nama": "Pembimbing pencangkokan"
          },
          {
            "id": 60,
            "parent_id": 111100,
            "id_sister": 111102,
            "nama": "Pembimbing Reguler"
          },
          {
            "id": 61,
            "parent_id": 110000,
            "id_sister": 111200,
            "nama": "Melaksanakan kegiatan Detasering dan Pencangkokan di luar institusi "
          },
          {
            "id": 62,
            "parent_id": 111200,
            "id_sister": 111201,
            "nama": "Detasering Dosen berkegiatan pada institusi Qs 100"
          },
          {
            "id": 63,
            "parent_id": 111200,
            "id_sister": 111202,
            "nama": "Detasering Dosen berkegiatan pada institusi nasional"
          },
          {
            "id": 64,
            "parent_id": 111200,
            "id_sister": 111203,
            "nama": "Pencangkokan Dosen berkegiatan pada institusi Qs 100"
          },
          {
            "id": 65,
            "parent_id": 111200,
            "id_sister": 111204,
            "nama": "Pencangkokan Dosen berkegiatan pada institusi nasional"
          },
          {
            "id": 66,
            "parent_id": 110000,
            "id_sister": 111300,
            "nama": "Melakukan kegiatan pengembangan diri untuk meningkatkan kompetensi/memperoleh sertifikasi profesi "
          },
          {
            "id": 67,
            "parent_id": 111300,
            "id_sister": 111301,
            "nama": "Lamanya lebih dari 960 jam"
          },
          {
            "id": 68,
            "parent_id": 111300,
            "id_sister": 111302,
            "nama": "Lamanya 641-960 jam"
          },
          {
            "id": 69,
            "parent_id": 111300,
            "id_sister": 111303,
            "nama": "Lamanya 481-640 jam"
          },
          {
            "id": 70,
            "parent_id": 111300,
            "id_sister": 111304,
            "nama": "Lamanya 161-480 jam"
          },
          {
            "id": 71,
            "parent_id": 111300,
            "id_sister": 111305,
            "nama": "Lamanya 81-160 jam"
          },
          {
            "id": 72,
            "parent_id": 111300,
            "id_sister": 111306,
            "nama": "Lamanya 31-80 jam"
          },
          {
            "id": 73,
            "parent_id": 111300,
            "id_sister": 111307,
            "nama": "Lamanya 10-30 jam"
          },
          {
            "id": 74,
            "parent_id": 111300,
            "id_sister": 111308,
            "nama": "Memperoleh sertifikasi profesi Bereputasi tingkat Internasional"
          },
          {
            "id": 75,
            "parent_id": 111300,
            "id_sister": 111309,
            "nama": "Memperoleh sertifikasi profesi Bereputasi tingkat Nasional"
          },
          {
            "id": 76,
            "parent_id": 110000,
            "id_sister": 111400,
            "nama": "Pendampingan, pembimbingan, mentoring mahasiswa secara terstruktur menghasilkan diantaranya: karya inovatif, karya teknologi yang bermanfaat bagi kesejahteraan masyarakat dan industri; proyek kewirausahaan; startup/usaha rintisan; magang industri; bina de"
          },
          {
            "id": 77,
            "parent_id": null,
            "id_sister": 120000,
            "nama": "Pelaksanaan Penelitian"
          },
          {
            "id": 78,
            "parent_id": 120000,
            "id_sister": 120100,
            "nama": "Menghasilkan Karya Ilmiah sesuai dengan bidangnya"
          },
          {
            "id": 79,
            "parent_id": 120100,
            "id_sister": 120101,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk monograf"
          },
          {
            "id": 80,
            "parent_id": 120100,
            "id_sister": 120102,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk buku referensi"
          },
          {
            "id": 81,
            "parent_id": 120100,
            "id_sister": 120103,
            "nama": "Hasil penelitian/hasil pemikiran dalam buku yang dipublikasikan dan berisi berbagai tulisan dari berbagai penulis (book chapter) internasional"
          },
          {
            "id": 82,
            "parent_id": 120100,
            "id_sister": 120104,
            "nama": "Hasil penelitian/hasil pemikiran dalam buku yang dipublikasikan dan berisi berbagai tulisan dari berbagai penulis (book chapter) nasional"
          },
          {
            "id": 83,
            "parent_id": 120100,
            "id_sister": 120105,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal internasional bereputasi"
          },
          {
            "id": 84,
            "parent_id": 120100,
            "id_sister": 120106,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal internasional terindeks pada database internasional bereputasi"
          },
          {
            "id": 85,
            "parent_id": 120100,
            "id_sister": 120107,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal internasional terindeks pada basis data internasional"
          },
          {
            "id": 86,
            "parent_id": 120100,
            "id_sister": 120108,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal nasional terakreditasi Kemenristekdikti"
          },
          {
            "id": 87,
            "parent_id": 120100,
            "id_sister": 120109,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal nasional berbahasa Indonesia terindeks pada DOAJ"
          },
          {
            "id": 88,
            "parent_id": 120100,
            "id_sister": 120110,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal nasional berbahasa Inggris atau bahasa resmi PBB terindeks pada DOAJ"
          },
          {
            "id": 89,
            "parent_id": 120100,
            "id_sister": 120111,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal nasional"
          },
          {
            "id": 90,
            "parent_id": 120100,
            "id_sister": 120112,
            "nama": "Hasil penelitian/pemikiran yang dipublikasikan dalam bentuk jurnal ilmiah yang ditulis dalam Bahasa Resmi PBB namun tidak memenuhi syarat-syarat sebagai jurnal ilmiah internasional"
          },
          {
            "id": 91,
            "parent_id": 120100,
            "id_sister": 120113,
            "nama": "Hasil penelitian/pemikiran yang dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISBN/ISSN) dalam seminar internasional"
          },
          {
            "id": 92,
            "parent_id": 120100,
            "id_sister": 120114,
            "nama": "Hasil penelitian/pemikiran yang dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISBN/ISSN) dalam seminar nasional"
          },
          {
            "id": 93,
            "parent_id": 120100,
            "id_sister": 120115,
            "nama": "Hasil penelitian/pemikiran yang disajikan dalam bentuk poster dan dimuat dalam prosiding yang dipublikasikan dalam seminar internasional"
          },
          {
            "id": 94,
            "parent_id": 120100,
            "id_sister": 120116,
            "nama": "Hasil penelitian/pemikiran yang disajikan dalam bentuk poster dan dimuat dalam prosiding yang dipublikasikan dalam seminar nasional"
          },
          {
            "id": 95,
            "parent_id": 120100,
            "id_sister": 120117,
            "nama": "Hasil penelitian/pemikiran yang disajikan, tetapi tidak dimuat dalam prosiding yang dipublikasikan dalam seminar/simposium/lokakarya internasional"
          },
          {
            "id": 96,
            "parent_id": 120100,
            "id_sister": 120118,
            "nama": "Hasil penelitian/pemikiran yang disajikan, tetapi tidak dimuat dalam prosiding yang dipublikasikan dalam seminar/simposium/lokakarya nasional"
          },
          {
            "id": 97,
            "parent_id": 120100,
            "id_sister": 120119,
            "nama": "Hasil penelitian/pemikiran yang tidak disajikan, tetapi dimuat dalam prosiding seminar/simposium/lokakarya internasional"
          },
          {
            "id": 98,
            "parent_id": 120100,
            "id_sister": 120120,
            "nama": "Hasil penelitian/pemikiran yang tidak disajikan, tetapi dimuat dalam prosiding seminar/simposium/lokakarya nasional"
          },
          {
            "id": 99,
            "parent_id": 120100,
            "id_sister": 120121,
            "nama": "Hasil penelitian/pemikiran yang disajikan dalam koran/majalah populer/umum"
          },
          {
            "id": 100,
            "parent_id": 120100,
            "id_sister": 120122,
            "nama": "Hasil penelitian atau pemikiran atau kerjasama industri yang tidak dipublikasikan (tersimpan di perpustakaan)"
          },
          {
            "id": 101,
            "parent_id": 120000,
            "id_sister": 120200,
            "nama": "Menerjemahkan/menyadur buku ilmiah yang Diterbitkan dan diedarkan secara nasional (Ber-ISBN)"
          },
          {
            "id": 102,
            "parent_id": 120000,
            "id_sister": 120300,
            "nama": "Mengedit/menyunting karya ilmiah yang Diterbitkan dan diedarkan secara nasional (Ber-ISBN)"
          },
          {
            "id": 103,
            "parent_id": 120000,
            "id_sister": 120400,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI"
          },
          {
            "id": 104,
            "parent_id": 120400,
            "id_sister": 120401,
            "nama": "Membuat rancangan dan karya teknologi/seni yang dipatenkan secara internasional"
          },
          {
            "id": 105,
            "parent_id": 120400,
            "id_sister": 120402,
            "nama": "Membuat rancangan dan karya teknologi/seni yang dipatenkan secara nasional"
          },
          {
            "id": 106,
            "parent_id": 120400,
            "id_sister": 120403,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI secara Internasional/Nasional dan Diterapkan pada perusahaan multinasional/BUMN/Nasional"
          },
          {
            "id": 107,
            "parent_id": 120400,
            "id_sister": 120404,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI secara Internasional/Nasional dan Diterapkan pada perusahaan lainnya"
          },
          {
            "id": 108,
            "parent_id": 120400,
            "id_sister": 120405,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI secara Internasional/Nasional dan digunakan pada UMKM/masyarakat UMKM"
          },
          {
            "id": 109,
            "parent_id": 120400,
            "id_sister": 120406,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI secara Internasional/Nasional dan digunakan pada UMKM/masyarakat Desa"
          },
          {
            "id": 110,
            "parent_id": 120400,
            "id_sister": 120407,
            "nama": "Membuat rancangan dan karya teknologi yang dipatenkan atau seni yang terdaftar di HaKI dan menghasilkan Paten bersertifikat internasional/nasional yang belum diterapkan "
          },
          {
            "id": 111,
            "parent_id": 120000,
            "id_sister": 120500,
            "nama": "Membuat rancangan dan karya teknologi, rancangan dan karya seni monumental/seni pertunjukan/karya sastra"
          },
          {
            "id": 112,
            "parent_id": 120500,
            "id_sister": 120501,
            "nama": "Membuat rancangan dan karya teknologi yang tidak dipatenkan; rancangan dan karya seni monumental/seni pertunjukan; karya sastra tingkat internasional"
          },
          {
            "id": 113,
            "parent_id": 120500,
            "id_sister": 120502,
            "nama": "Membuat rancangan dan karya teknologi yang tidak dipatenkan; rancangan dan karya seni monumental/seni pertunjukan; karya sastra tingkat nasional"
          },
          {
            "id": 114,
            "parent_id": 120500,
            "id_sister": 120503,
            "nama": "Membuat rancangan dan karya teknologi yang tidak dipatenkan; rancangan dan karya seni monumental/seni pertunjukan; karya sastra tingkat lokal"
          },
          {
            "id": 115,
            "parent_id": 120000,
            "id_sister": 120504,
            "nama": "Membuat rancangan dan karya seni/seni pertunjukan yang tidak mendapatkan HKI"
          },
          {
            "id": 116,
            "parent_id": 120000,
            "id_sister": 120600,
            "nama": "Melaksanakan aktivitas penelitian"
          },
          {
            "id": 117,
            "parent_id": 120600,
            "id_sister": 120601,
            "nama": "Sebagai ketua"
          },
          {
            "id": 118,
            "parent_id": 120600,
            "id_sister": 120602,
            "nama": "Sebagai anggota"
          },
          {
            "id": 119,
            "parent_id": 120000,
            "id_sister": 120700,
            "nama": "Melaksanakan penelitian/karya seni"
          },
          {
            "id": 120,
            "parent_id": 120504,
            "id_sister": 120701,
            "nama": "Melaksanakan penelitian/karya seni sebagai komposer/ penulis naskah/ sutradara/ perancang/ pencipta/ penggubah/ kameramen/ animator/ kurator/ editor audio-visual tingkat internasional"
          },
          {
            "id": 121,
            "parent_id": 120504,
            "id_sister": 120702,
            "nama": "Melaksanakan penelitian/karya seni sebagai komposer/ penulis naskah/ sutradara/ perancang/ pencipta/ penggubah/ kameramen/ animator/ kurator/ editor audio-visual tingkat nasional"
          },
          {
            "id": 122,
            "parent_id": 120504,
            "id_sister": 120703,
            "nama": "Melaksanakan penelitian/karya seni sebagai komposer/ penulis naskah/ sutradara/ perancang/ pencipta/ penggubah/ kameramen/ animator/ kurator/ editor audio-visual tingkat lokal"
          },
          {
            "id": 123,
            "parent_id": 120504,
            "id_sister": 120704,
            "nama": "Melaksanakan penelitian/karya seni sebagai penata arstistik/penata musik/penata rias/penata busana/penata tari/penata lampu/penata suara/penata panggung/ilustrator foto/konduktor tingkat internasional"
          },
          {
            "id": 124,
            "parent_id": 120504,
            "id_sister": 120705,
            "nama": "Melaksanakan penelitian/karya seni sebagai penata arstistik/penata musik/penata rias/penata busana/penata tari/penata lampu/penata suara/penata panggung/ilustrator foto/konduktor tingkat nasional"
          },
          {
            "id": 125,
            "parent_id": 120504,
            "id_sister": 120706,
            "nama": "Melaksanakan penelitian/karya seni sebagai penata arstistik/penata musik/penata rias/penata busana/penata tari/penata lampu/penata suara/penata panggung/ilustrator foto/konduktor tingkat lokal"
          },
          {
            "id": 126,
            "parent_id": 120504,
            "id_sister": 120707,
            "nama": "Melaksanakan penelitian/karya seni sebagai pemusik/ pengrawit/ penari/ dalang/ pemeran/ pengarah acara televisi/ pelaksana perancangan/ pendisplay pameran/ pembuat foto dokumentasi/ pewarta foto/ pembawa acara/ reporter/ redaktur pelaksana tingkat interna"
          },
          {
            "id": 127,
            "parent_id": 120504,
            "id_sister": 120708,
            "nama": "Melaksanakan penelitian/karya seni sebagai pemusik/ pengrawit/ penari/ dalang/ pemeran/ pengarah acara televisi/ pelaksana perancangan/ pendisplay pameran/ pembuat foto dokumentasi/ pewarta foto/ pembawa acara/ reporter/ redaktur pelaksana tingkat nasiona"
          },
          {
            "id": 128,
            "parent_id": 120504,
            "id_sister": 120709,
            "nama": "Melaksanakan penelitian/karya seni sebagai pemusik/ pengrawit/ penari/ dalang/ pemeran/ pengarah acara televisi/ pelaksana perancangan/ pendisplay pameran/ pembuat foto dokumentasi/ pewarta foto/ pembawa acara/ reporter/ redaktur pelaksana tingkat lokal"
          },
          {
            "id": 129,
            "parent_id": 120000,
            "id_sister": 120800,
            "nama": "Melaksanakan penelitian/karya sastra"
          },
          {
            "id": 130,
            "parent_id": 120504,
            "id_sister": 120801,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis naskah drama/novel tingkat internasional"
          },
          {
            "id": 131,
            "parent_id": 120504,
            "id_sister": 120802,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis naskah drama/novel tingkat nasional"
          },
          {
            "id": 132,
            "parent_id": 120504,
            "id_sister": 120803,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis naskah drama/novel tingkat lokal"
          },
          {
            "id": 133,
            "parent_id": 120504,
            "id_sister": 120804,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan cerpen tingkat internasional"
          },
          {
            "id": 134,
            "parent_id": 120504,
            "id_sister": 120805,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan cerpen tingkat nasional"
          },
          {
            "id": 135,
            "parent_id": 120504,
            "id_sister": 120806,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan cerpen tingkat lokal"
          },
          {
            "id": 136,
            "parent_id": 120504,
            "id_sister": 120807,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan puisi tingkat internasional"
          },
          {
            "id": 137,
            "parent_id": 120504,
            "id_sister": 120808,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan puisi tingkat nasional"
          },
          {
            "id": 138,
            "parent_id": 120504,
            "id_sister": 120809,
            "nama": "Melaksanakan penelitian/karya sastra sebagai penulis buku kumpulan puisi tingkat lokal"
          },
          {
            "id": 139,
            "parent_id": 120504,
            "id_sister": 120810,
            "nama": "Melaksanakan penelitian/desain sebagai desainer interior/desainer komunikasi visual/ desainer produk/ desainer tekstil tingkat internasional"
          },
          {
            "id": 140,
            "parent_id": 120504,
            "id_sister": 120811,
            "nama": "Melaksanakan penelitian/desain sebagai desainer interior/desainer komunikasi visual/ desainer produk/ desainer tekstil tingkat nasional"
          },
          {
            "id": 141,
            "parent_id": 120504,
            "id_sister": 120812,
            "nama": "Melaksanakan penelitian/desain sebagai desainer interior/desainer komunikasi visual/ desainer produk/ desainer tekstil tingkat lokal"
          },
          {
            "id": 142,
            "parent_id": 120000,
            "id_sister": 120900,
            "nama": "Hasil penelitian atau hasil pemikiran yang didesiminasikan"
          },
          {
            "id": 143,
            "parent_id": 120900,
            "id_sister": 120901,
            "nama": "Hasil penelitian atau hasil pemikiran yang Dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISSN/ISBN): Internasional terindeks pada Scimagojr dan Scopus"
          },
          {
            "id": 144,
            "parent_id": 120900,
            "id_sister": 120902,
            "nama": "Hasil penelitian atau hasil pemikiran yang Dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISSN/ISBN): Internasional terindeks Scopus, IEEE Explore, SPIE"
          },
          {
            "id": 145,
            "parent_id": 120900,
            "id_sister": 120903,
            "nama": "Hasil penelitian atau hasil pemikiran yang Dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISSN/ISBN): Internasional"
          },
          {
            "id": 146,
            "parent_id": 120900,
            "id_sister": 120904,
            "nama": "Hasil penelitian atau hasil pemikiran yang Dipresentasikan secara oral dan dimuat dalam prosiding yang dipublikasikan (ber ISSN/ISBN): Nasional"
          },
          {
            "id": 147,
            "parent_id": 120900,
            "id_sister": 120905,
            "nama": "Hasil penelitian atau hasil pemikiran yang disajikan dalam bentuk poster dan dimuat dalam prosiding yang dipublikasikan dalam seminar internasional"
          },
          {
            "id": 148,
            "parent_id": 120900,
            "id_sister": 120906,
            "nama": "Hasil penelitian atau hasil pemikiran yang disajikan dalam bentuk poster dan dimuat dalam prosiding yang dipublikasikan dalam seminar nasional"
          },
          {
            "id": 149,
            "parent_id": 120900,
            "id_sister": 120907,
            "nama": "Hasil penelitian atau hasil pemikiran yang Disajikan dalam seminar/simposium/lokakarya, tetapi tidak dimuat dalam prosiding yang dipublikasikan: Internasional"
          },
          {
            "id": 150,
            "parent_id": 120900,
            "id_sister": 120908,
            "nama": "Hasil penelitian atau hasil pemikiran yang Disajikan dalam seminar/simposium/lokakarya, tetapi tidak dimuat dalam prosiding yang dipublikasikan: nasional"
          },
          {
            "id": 151,
            "parent_id": 120900,
            "id_sister": 120909,
            "nama": "Hasil penelitian atau hasil pemikiran yang tidak disajikan dalam seminar/simposium/lokakarya, tetapi dimuat dalam prosiding: Internasional"
          },
          {
            "id": 152,
            "parent_id": 120900,
            "id_sister": 120910,
            "nama": "Hasil penelitian atau hasil pemikiran yang tidak disajikan dalam seminar/simposium/lokakarya, tetapi dimuat dalam prosiding: Nasional"
          },
          {
            "id": 153,
            "parent_id": 120900,
            "id_sister": 120911,
            "nama": "Hasil penelitian atau hasil pemikiran yang disajikan dalam koran/majalah populer/umum"
          },
          {
            "id": 154,
            "parent_id": 120000,
            "id_sister": 121000,
            "nama": "karya inovatif/ karya teknologi/teknologi tepat guna/karya desain/karya senitidak dipatenkan/tidak terdaftar HaKI/tidak dipublikasikan,  tetapi diaplikasikan pada industri/berdampak pada kesejahteraan masyarakat dan berkontribusi pada peningkatan daya sai"
          },
          {
            "id": 155,
            "parent_id": 120000,
            "id_sister": 121100,
            "nama": "rumusan kebijakan yang monumental dalam bentuk arahan/kertas kebijakan (policy brief/policy paper), naskah akademik, model kebijakan strategis atau rekomendasi kebijakan yang berkontribusi terhadap pengembangan kebijakan dan pembangunan"
          },
          {
            "id": 156,
            "parent_id": 121100,
            "id_sister": 121101,
            "nama": "Tingkat internasional"
          },
          {
            "id": 157,
            "parent_id": 121100,
            "id_sister": 121102,
            "nama": "Tingkat nasional"
          },
          {
            "id": 158,
            "parent_id": 121100,
            "id_sister": 121103,
            "nama": "Tingkat lokal"
          },
          {
            "id": 159,
            "parent_id": 120000,
            "id_sister": 121200,
            "nama": "Membuat rancangan dan karya teknologi yang tidak dipatenkan rancangan dan karya seni monumental yang tidak terdaftar di HaKI, tetapi telah dipresentasikan pada forum yang teragenda"
          },
          {
            "id": 160,
            "parent_id": 121200,
            "id_sister": 121201,
            "nama": "Tingkat internasional"
          },
          {
            "id": 161,
            "parent_id": 121200,
            "id_sister": 121202,
            "nama": "Tingkat nasional"
          },
          {
            "id": 162,
            "parent_id": 121200,
            "id_sister": 121203,
            "nama": "Tingkat lokal"
          },
          {
            "id": 163,
            "parent_id": 120000,
            "id_sister": 121300,
            "nama": "Hasil penelitian atau pemikiran atau kerjasama industri termasuk penelitian penugasan dari kementerian atau LPNK yang tidak dipublikasikan (tersimpan dalam perpustakaan) yang dilakukan secara melembaga"
          },
          {
            "id": 164,
            "parent_id": null,
            "id_sister": 130000,
            "nama": "Pelaksanaan Pengabdian Kepada Masyarakat"
          },
          {
            "id": 165,
            "parent_id": 130000,
            "id_sister": 130100,
            "nama": "Menduduki jabatan pimpinan pada lembaga pemerintahan/pejabat negara yang harus dibebaskan dari jabatan organiknya atau bekerja pada industri/organisasi yang diakui Kemendikbud"
          },
          {
            "id": 166,
            "parent_id": 130000,
            "id_sister": 130200,
            "nama": "Melaksanakan pengembangan hasil pendidikan dan penelitian"
          },
          {
            "id": 167,
            "parent_id": 130200,
            "id_sister": 130201,
            "nama": "Dimanfaatkan oleh Masyarakat Internasional/Industri atau Perusahaan Multinasional"
          },
          {
            "id": 168,
            "parent_id": 130200,
            "id_sister": 130202,
            "nama": "Dimanfaatkan oleh Masyarakat Nasional/Industri atau Perusahaan Nasional/BUMN"
          },
          {
            "id": 169,
            "parent_id": 130200,
            "id_sister": 130203,
            "nama": "Dimanfaatkan oleh Masyarakat Provinsi/Industri atau Perusahaan Daerah/BUMD/UMKM"
          },
          {
            "id": 170,
            "parent_id": 130200,
            "id_sister": 130204,
            "nama": "Dimanfaatkan oleh Masyarakat Terbatas /Pada Industri atau Perusahaan tertentu"
          },
          {
            "id": 171,
            "parent_id": 130000,
            "id_sister": 130300,
            "nama": "Memberi latihan/penyuluhan/penataran/ceramah/pendampingan pada masyarakat, terjadwal/terprogram"
          },
          {
            "id": 172,
            "parent_id": 130300,
            "id_sister": 130301,
            "nama": "Terjadwal/terprogram dalam satu semester atau lebih (tingkat internasional)"
          },
          {
            "id": 173,
            "parent_id": 130300,
            "id_sister": 130302,
            "nama": "Terjadwal/terprogram dalam satu semester atau lebih (tingkat nasional)"
          },
          {
            "id": 174,
            "parent_id": 130300,
            "id_sister": 130303,
            "nama": "Terjadwal/terprogram dalam satu semester atau lebih (tingkat lokal)"
          },
          {
            "id": 175,
            "parent_id": 130300,
            "id_sister": 130304,
            "nama": "Terjadwal/terprogram kurang dari satu semester dan minimal satu bulan (tingkat internasional)"
          },
          {
            "id": 176,
            "parent_id": 130300,
            "id_sister": 130305,
            "nama": "Terjadwal/terprogram kurang dari satu semester dan minimal satu bulan (tingkat nasional)"
          },
          {
            "id": 177,
            "parent_id": 130300,
            "id_sister": 130306,
            "nama": "Terjadwal/terprogram kurang dari satu semester dan minimal satu bulan (tingkat lokal)"
          },
          {
            "id": 178,
            "parent_id": 130300,
            "id_sister": 130307,
            "nama": "Insidential (tingkat internasional)"
          },
          {
            "id": 179,
            "parent_id": 130300,
            "id_sister": 130308,
            "nama": "Insidential (tingkat nasional)"
          },
          {
            "id": 180,
            "parent_id": 130300,
            "id_sister": 130309,
            "nama": "Insidential (tingkat lokal)"
          },
          {
            "id": 181,
            "parent_id": 130000,
            "id_sister": 130400,
            "nama": "Memberi pelayanan kepada masyarakat atau kegiatan lain yang menunjang pelaksanaan tugas umum pemerintah dan pembangunan"
          },
          {
            "id": 182,
            "parent_id": 130400,
            "id_sister": 130401,
            "nama": "Berdasarkan bidang keahlian"
          },
          {
            "id": 183,
            "parent_id": 130400,
            "id_sister": 130402,
            "nama": "Berdasarkan penugasan lembaga perguruan tinggi"
          },
          {
            "id": 184,
            "parent_id": 130400,
            "id_sister": 130403,
            "nama": "Berdasarkan fungsi/jabatan"
          },
          {
            "id": 185,
            "parent_id": 130400,
            "id_sister": 130404,
            "nama": "Pengurus Organisasi Sosial Kemasyarakatan"
          },
          {
            "id": 186,
            "parent_id": 130000,
            "id_sister": 130500,
            "nama": "Membuat/menulis karya pengabdian pada masyarakat yang tidak dipublikasikan"
          },
          {
            "id": 187,
            "parent_id": 130000,
            "id_sister": 130600,
            "nama": "Hasil kegiatan pengabdian kepada masyarakat yang dipublikasikan di sebuah berkala/jurnal ilmiah pengabdian kepada masyarakat atau teknologi tepat guna, merupakan diseminasi dari luaran program kegiatan pengabdian kepada masyarakat, tiap karya "
          },
          {
            "id": 188,
            "parent_id": 130000,
            "id_sister": 130700,
            "nama": "Berperan serta aktif dalam pengelolaan jurnal ilmiah"
          },
          {
            "id": 189,
            "parent_id": 130700,
            "id_sister": 130701,
            "nama": "Sebagai editor/dewan penyunting/dewan redaksi jurnal ilmiah internasional "
          },
          {
            "id": 190,
            "parent_id": 130700,
            "id_sister": 130702,
            "nama": "Sebagai editor/dewan penyunting/dewan redaksi jurnal ilmiah nasional"
          },
          {
            "id": 191,
            "parent_id": null,
            "id_sister": 140000,
            "nama": "Penunjang Kegiatan Akademik Dosen"
          },
          {
            "id": 192,
            "parent_id": 140000,
            "id_sister": 140100,
            "nama": "Menjadi anggota dalam suatu panitia/badan pada perguruan tinggi"
          },
          {
            "id": 193,
            "parent_id": 140100,
            "id_sister": 140101,
            "nama": "Sebagai ketua merangkap anggota tim perencana kemitraan program studi dengan mitra kelas dunia"
          },
          {
            "id": 194,
            "parent_id": 140100,
            "id_sister": 140102,
            "nama": "Sebagai anggota"
          },
          {
            "id": 195,
            "parent_id": 140100,
            "id_sister": 140103,
            "nama": "Sebagai Wakil Ketua merangkap anggota tim perencana kemitraan program studi dengan mitra kelas dunia"
          },
          {
            "id": 196,
            "parent_id": 140100,
            "id_sister": 140104,
            "nama": "Sebagai Sekretaris merangkap anggota tim perencana kemitraan program studi dengan mitra kelas dunia"
          },
          {
            "id": 197,
            "parent_id": 140100,
            "id_sister": 140105,
            "nama": "Sebagai anggota tim perencana kemitraan program studi dengan mitra kelas dunia"
          },
          {
            "id": 198,
            "parent_id": 140100,
            "id_sister": 140106,
            "nama": "Sebagai ketua merangkap anggota tim peningkatan mutu program studi dengan tujuan meraih akreditasi tingkat internasional"
          },
          {
            "id": 199,
            "parent_id": 140100,
            "id_sister": 140107,
            "nama": "Sebagai Wakil Ketua merangkap anggota tim peningkatan mutu program studi dengan tujuan meraih akreditasi tingkat internasional"
          },
          {
            "id": 200,
            "parent_id": 140100,
            "id_sister": 140108,
            "nama": "Sebagai Sekretaris merangkap anggota tim peningkatan mutu program studi dengan tujuan meraih akreditasi tingkat internasional"
          },
          {
            "id": 201,
            "parent_id": 140100,
            "id_sister": 140109,
            "nama": "Sebagai anggota tim peningkatan mutu program studi dengan tujuan meraih akreditasi tingkat internasional"
          },
          {
            "id": 202,
            "parent_id": 140100,
            "id_sister": 140110,
            "nama": "Sebagai Ketua / wakil ketua / Sekretaris merangkap anggota"
          },
          {
            "id": 203,
            "parent_id": 140000,
            "id_sister": 140200,
            "nama": "Menjadi anggota panitia/badan pada lembaga pemerintah"
          },
          {
            "id": 204,
            "parent_id": 140200,
            "id_sister": 140201,
            "nama": "Panitia pusat sebagai ketua/wakil ketua"
          },
          {
            "id": 205,
            "parent_id": 140200,
            "id_sister": 140202,
            "nama": "Panitia pusat sebagai anggota"
          },
          {
            "id": 206,
            "parent_id": 140200,
            "id_sister": 140203,
            "nama": "Panitia daerah sebagai ketua/wakil ketua"
          },
          {
            "id": 207,
            "parent_id": 140200,
            "id_sister": 140204,
            "nama": "Panitia daerah sebagai anggota"
          },
          {
            "id": 208,
            "parent_id": 140000,
            "id_sister": 140300,
            "nama": "Menjadi anggota organisasi profesi"
          },
          {
            "id": 209,
            "parent_id": 140300,
            "id_sister": 140301,
            "nama": "Tingkat internasional sebagai pengurus"
          },
          {
            "id": 210,
            "parent_id": 140300,
            "id_sister": 140302,
            "nama": "Tingkat internasional sebagai anggota atas permintaan"
          },
          {
            "id": 211,
            "parent_id": 140300,
            "id_sister": 140303,
            "nama": "Tingkat internasional sebagai anggota"
          },
          {
            "id": 212,
            "parent_id": 140300,
            "id_sister": 140304,
            "nama": "Tingkat nasional sebagai pengurus"
          },
          {
            "id": 213,
            "parent_id": 140300,
            "id_sister": 140305,
            "nama": "Tingkat nasional sebagai anggota atas permintaan"
          },
          {
            "id": 214,
            "parent_id": 140300,
            "id_sister": 140306,
            "nama": "Tingkat nasional sebagai anggota"
          },
          {
            "id": 215,
            "parent_id": 140000,
            "id_sister": 140400,
            "nama": "Mewakili perguruan tinggi/lembaga pemerintah"
          },
          {
            "id": 216,
            "parent_id": 140000,
            "id_sister": 140500,
            "nama": "Menjadi anggota delegasi nasional ke pertemuan internasional"
          },
          {
            "id": 217,
            "parent_id": 140500,
            "id_sister": 140501,
            "nama": "Sebagai ketua delegasi"
          },
          {
            "id": 218,
            "parent_id": 140500,
            "id_sister": 140502,
            "nama": "Sebagai anggota delegasi"
          },
          {
            "id": 219,
            "parent_id": 140000,
            "id_sister": 140600,
            "nama": "Berperan serta aktif dalam pengelolaan jurnal ilmiah"
          },
          {
            "id": 220,
            "parent_id": 140600,
            "id_sister": 140601,
            "nama": "Sebagai editor/dewan penyunting/dewan redaksi jurnal ilmiah internasional"
          },
          {
            "id": 221,
            "parent_id": 140600,
            "id_sister": 140602,
            "nama": "Sebagai editor/dewan penyunting/dewan redaksi jurnal ilmiah nasional"
          },
          {
            "id": 222,
            "parent_id": 140000,
            "id_sister": 140700,
            "nama": "Berperan serta aktif dalam pertemuan ilmiah"
          },
          {
            "id": 223,
            "parent_id": 140700,
            "id_sister": 140701,
            "nama": "Tingkat internasional/nasional/regional sebagai ketua"
          },
          {
            "id": 224,
            "parent_id": 140700,
            "id_sister": 140702,
            "nama": "Tingkat internasional/nasional/regional sebagai anggota/peserta"
          },
          {
            "id": 225,
            "parent_id": 140700,
            "id_sister": 140703,
            "nama": "Di lingkungan perguruan tinggi sebagai ketua"
          },
          {
            "id": 226,
            "parent_id": 140700,
            "id_sister": 140704,
            "nama": "Di lingkungan perguruan tinggi sebagai anggota/peserta"
          },
          {
            "id": 227,
            "parent_id": 140000,
            "id_sister": 140800,
            "nama": "Mendapat penghargaan/tanda jasa"
          },
          {
            "id": 228,
            "parent_id": 140800,
            "id_sister": 140801,
            "nama": "Penghargaan/tanda jasa Satyalancana Karya Satya 30 tahun"
          },
          {
            "id": 229,
            "parent_id": 140800,
            "id_sister": 140802,
            "nama": "Penghargaan/tanda jasa Satyalancana Karya Satya 20 tahun"
          },
          {
            "id": 230,
            "parent_id": 140800,
            "id_sister": 140803,
            "nama": "Penghargaan/tanda jasa Satyalancana Karya Satya 10 tahun"
          },
          {
            "id": 231,
            "parent_id": 140800,
            "id_sister": 140804,
            "nama": "Penghargaan lainnya tingkat internasional"
          },
          {
            "id": 232,
            "parent_id": 140800,
            "id_sister": 140805,
            "nama": "Penghargaan lainnya tingkat nasional"
          },
          {
            "id": 233,
            "parent_id": 140800,
            "id_sister": 140806,
            "nama": "Penghargaan lainnya tingkat provinsi/lokal"
          },
          {
            "id": 234,
            "parent_id": 140000,
            "id_sister": 140900,
            "nama": "Menulis buku pelajaran SLTA ke bawah yang diterbitkan dan diedarkan secara nasional"
          },
          {
            "id": 235,
            "parent_id": 140900,
            "id_sister": 140901,
            "nama": "Buku SLTA atau setingkat"
          },
          {
            "id": 236,
            "parent_id": 140900,
            "id_sister": 140902,
            "nama": "Buku SLTP atau setingkat"
          },
          {
            "id": 237,
            "parent_id": 140900,
            "id_sister": 140903,
            "nama": "Buku SD atau setingkat"
          },
          {
            "id": 238,
            "parent_id": 140000,
            "id_sister": 141000,
            "nama": "Mempunyai prestasi di bidang olahraga/humaniora"
          },
          {
            "id": 239,
            "parent_id": 141000,
            "id_sister": 141001,
            "nama": "Tingkat internasional"
          },
          {
            "id": 240,
            "parent_id": 141000,
            "id_sister": 141002,
            "nama": "Tingkat nasional"
          },
          {
            "id": 241,
            "parent_id": 141000,
            "id_sister": 141003,
            "nama": "Tingkat daerah/lokal"
          },
          {
            "id": 242,
            "parent_id": 140000,
            "id_sister": 141100,
            "nama": "Keanggotaan dalam tim penilai/ kegiatan lainnya dari kementerian"
          },
          {
            "id": 243,
            "parent_id": 140000,
            "id_sister": 141200,
            "nama": "Keanggotaan dalam organisasi profesi dosen"
          },
          {
            "id": 244,
            "parent_id": 141200,
            "id_sister": 141201,
            "nama": "Tingkat nasional sebagai pengurus aktif"
          },
          {
            "id": 245,
            "parent_id": 141200,
            "id_sister": 141202,
            "nama": "Tingkat nasional sebagai anggota aktif"
          },
          {
            "id": 246,
            "parent_id": 141200,
            "id_sister": 141203,
            "nama": "Tingkat nasional provinsi/kabupaten/kota sebagai pengurus aktif"
          },
          {
            "id": 247,
            "parent_id": 141200,
            "id_sister": 141204,
            "nama": "Tingkat nasional provinsi/kabupaten/kota sebagai anggota aktif"
          },
          {
            "id": 248,
            "parent_id": null,
            "id_sister": 150000,
            "nama": "Kewajiban Khusus Profesor"
          },
          {
            "id": 249,
            "parent_id": 150000,
            "id_sister": 150100,
            "nama": "Menulis buku yang diterbitkan oleh lembaga penerbit baik nasional maupun internasional yang mempunyai ISBN "
          },
          {
            "id": 250,
            "parent_id": 150000,
            "id_sister": 150200,
            "nama": "Menghasilkan karya ilmiah yang diterbitkan dalam jurnal internasional bereputasi dan atau membimbing dan menghasilkan doktor"
          },
          {
            "id": 251,
            "parent_id": 150200,
            "id_sister": 150201,
            "nama": "Menghasilkan karya ilmiah yang diterbitkan dalam jurnal internasional bereputasi"
          },
          {
            "id": 252,
            "parent_id": 150200,
            "id_sister": 150202,
            "nama": "Membimbing dan menghasilkan doktor (sebagai promotor)"
          },
          {
            "id": 253,
            "parent_id": 150200,
            "id_sister": 150203,
            "nama": "Membimbing dan menghasilkan doktor (sebagai ko-promotor)"
          },
          {
            "id": 254,
            "parent_id": 150000,
            "id_sister": 150300,
            "nama": "Menyebarluaskan gagasannya untuk mencerahkan\nmasyarakat"
          },
          {
            "id": 255,
            "parent_id": 150300,
            "id_sister": 150301,
            "nama": "Menyebarluaskan gagasan pada masyarakat akademik dalam forum internasional dan dalam bahasa internasional"
          },
          {
            "id": 256,
            "parent_id": 150300,
            "id_sister": 150302,
            "nama": "Menyebarluaskan gagasan pada masyarakat akademik dalam forum nasional"
          },
          {
            "id": 257,
            "parent_id": 150300,
            "id_sister": 150303,
            "nama": "Menyebarluaskan gagasan pada masyarakat umum dalam forum internasional dan dalam bahasa internasional"
          },
          {
            "id": 258,
            "parent_id": 150300,
            "id_sister": 150304,
            "nama": "Menyebarluaskan gagasan pada masyarakat umum dalam forum nasional"
          },
          {
            "id": 259,
            "parent_id": 150300,
            "id_sister": 150305,
            "nama": "Menyebarluaskan gagasan pada masyarakat umum dalam forum lokal/daerah"
          }
        ]
      }
    )
}