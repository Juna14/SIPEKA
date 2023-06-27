import { apiSister } from "./axios";

export const fetchAlamat = async (id) => await apiSister.get(`/data_pribadi/alamat/${id}`).then(res=>res.data) 
export const fetchProfil = async (id) => await apiSister.get(`/data_pribadi/profil/${id}`).then(res=>res.data) 
export const fetchKependudukan = async (id) => await apiSister.get(`/data_pribadi/kependudukan/${id}`).then(res=>res.data) 
export const fetchLainLain = async (id) => await apiSister.get(`/data_pribadi/lain/${id}`).then(res=>res.data) 
export const fetchKeluarga = async (id) => await apiSister.get(`/data_pribadi/keluarga/${id}`).then(res=>res.data) 
export const fetchKepegawaian = async (id) => await apiSister.get(`/data_pribadi/kepegawaian/${id}`).then(res=>res.data) 
export const fetchBidangIlmu = async (id) => await apiSister.get(`/data_pribadi/bidang_ilmu/${id}`).then(res=>res.data) 

export const fetchListInpassing = async (id) => await apiSister.get(`/inpassing?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailInpassing = async (id) => await apiSister.get(`/inpassing/detail_inpassing/${id}`).then(res=>res.data) 
export const fetchListJabatanFungsional = async (id) => await apiSister.get(`/jabatan_fungsional?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailJabatanFungsional = async (id) => await apiSister.get(`/jabatan_fungsional/${id}`).then(res=>res.data) 
export const fetchListKepangkatan = async (id) => await apiSister.get(`/kepangkatan?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailKepangkatan = async (id) => await apiSister.get(`/kepangkatan/${id}`).then(res=>res.data) 
export const fetchListPenempatan = async (id) => await apiSister.get(`/penugasan?id_sdm=${id}`).then(res=>res.data) 
export const fetchDetailPenempatan = async (id) => await apiSister.get(`/penugasan/${id}`).then(res=>res.data) 

export const fetchListPenelitian = async (id) => await apiSister.get(`/penelitian?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPenelitian = async (id) => await apiSister.get(`/penelitian/${id}`).then(res=>res.data)
export const fetchBidangIlmuPenelitian = async (id) => await apiSister.get(`/penelitian/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPublikasi = async (id) => await apiSister.get(`/publikasi?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPublikasi = async (id) => await apiSister.get(`/publikasi/${id}`).then(res=>res.data)
export const fetchBidangIlmuPublikasi = async (id) => await apiSister.get(`/publikasi/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual/${id}`).then(res=>res.data)
export const fetchBidangIlmuKekayaanIntelektual = async (id) => await apiSister.get(`/kekayaan_intelektual/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengabdian = async (id) => await apiSister.get(`/pengabdian?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPengabdian = async (id) => await apiSister.get(`/pengabdian/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengabdian = async (id) => await apiSister.get(`/pengabdian/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengelolaJurnal = async (id) => await apiSister.get(`/pengelola_jurnal/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPembicara = async (id) => await apiSister.get(`/pembicara?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPembicara = async (id) => await apiSister.get(`/pembicara/${id}`).then(res=>res.data)
export const fetchBidangIlmuPembicara = async (id) => await apiSister.get(`/pembicara/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural/${id}`).then(res=>res.data)
export const fetchBidangIlmuJabatanStruktural = async (id) => await apiSister.get(`/jabatan_struktural/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi/${id}`).then(res=>res.data)
export const fetchBidangIlmuAnggotaProfesi = async (id) => await apiSister.get(`/anggota_profesi/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPenunjangLain = async (id) => await apiSister.get(`/penunjang_lain?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailPenunjangLain = async (id) => await apiSister.get(`/penunjang_lain/${id}`).then(res=>res.data)
export const fetchBidangIlmuPenunjangLain = async (id) => await apiSister.get(`/penunjang_lain/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengajaran = async (id, id_semester) => await apiSister.get(`/pengajaran?id_sdm=${id}${id_semester ? `&id_semester=${id_semester}` : ''}`).then(res=>res.data)
export const fetchDetailPengajaran = async (id) => await apiSister.get(`/pengajaran/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengajaran = async (id) => await apiSister.get(`/pengajaran/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListBimbinganMahasiswa = async (id, id_semester) => await apiSister.get(`/bimbingan_mahasiswa?id_sdm=${id}${id_semester ? `&id_semester=${id_semester}` : ''}`).then(res=>res.data)
export const fetchDetailBimbinganMahasiswa = async (id) => await apiSister.get(`/bimbingan_mahasiswa/${id}`).then(res=>res.data)
export const fetchBidangIlmuBimbinganMahasiswa = async (id) => await apiSister.get(`/bimbingan_mahasiswa/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListPengujianMahasiswa = async (id, id_semester) => await apiSister.get(`/pengujian_mahasiswa?id_sdm=${id}${id_semester ? `&id_semester=${id_semester}` : ''}`).then(res=>res.data)
export const fetchDetailPengujianMahasiswa = async (id) => await apiSister.get(`/pengujian_mahasiswa/${id}`).then(res=>res.data)
export const fetchBidangIlmuPengujianMahasiswa = async (id) => await apiSister.get(`/pengujian_mahasiswa/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListBahanAjar = async (id) => await apiSister.get(`/bahan_ajar?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailBahanAjar = async (id) => await apiSister.get(`/bahan_ajar/${id}`).then(res=>res.data)
export const fetchBidangIlmuBahanAjar = async (id) => await apiSister.get(`/bahan_ajar/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListBimbinganDosen = async (id) => await apiSister.get(`/bimbing_dosen?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailBimbinganDosen = async (id) => await apiSister.get(`/bimbing_dosen/${id}`).then(res=>res.data)

export const fetchListTugasTambahan = async (id) => await apiSister.get(`/tugas_tambahan?id_sdm=${id}`).then(res=>res.data)
export const fetchDetailTugasTambahan = async (id) => await apiSister.get(`/tugas_tambahan/${id}`).then(res=>res.data)
export const fetchBidangIlmuTugasTambahan = async (id) => await apiSister.get(`/tugas_tambahan/${id}/bidang_ilmu`).then(res=>res.data)

export const fetchListKateogriCapaianLuaran = async () => await apiSister.get(`/referensi/kategori_capaian_luaran`).then(res=>res.data).catch(err=>err)
export const fetchPerguruanTinggi = async () => await apiSister.get(`/referensi/perguruan_tinggi`).then(res=>res.data).catch(err=>err)
export const fetchKategoriKegiatan = async (type, menu) => await apiSister.get(`/referensi/kategori_kegiatan?tipe=${type}&menu=${menu}`).then(res=>res.data).catch(err=>err)
export const fetchGolonganPangkat = async () => await apiSister.get(`/referensi/golongan_pangkat`).then(res=>res.data).catch(err=>err)
export const fetchJabatanFungsional = async () => await apiSister.get(`/referensi/jabatan_fungsional`).then(res=>res.data).catch(err=>err)
export const fetchJabatanNegara = async () => await apiSister.get(`/referensi/jabatan_negara`).then(res=>res.data).catch(err=>err)
export const fetchDudi = async () => await apiSister.get(`/referensi/dudi`).then(res=>res.data).catch(err=>err)
export const fetchJenisDokumen = async () => await apiSister.get(`/referensi/jenis_dokumen`).then(res=>res.data).catch(err=>err)
export const fetchKelompokBidang = async (iptek) => await apiSister.get(`/referensi/kelompok_bidang?iptek=${iptek}`).then(res=>res.data).catch(err=>err)
export const fetchSemester = async () => await apiSister.get(`/referensi/semester`).then(res=>res.data).catch(err=>err)
export const fetchGelarAkademik = async () => await apiSister.get(`/referensi/gelar_akademik`).then(res=>res.data).catch(err=>err)
export const fetchBahanAjar = async () => await apiSister.get(`/referensi/jenis_bahan_ajar`).then(res=>res.data).catch(err=>err)
export const fetchMediaPublikasi = async (query) => await apiSister.get(`/referensi/media_publikasi?nama=${query}`).then(res=>res.data).catch(err=>err)

export const fetchPendidikanFormal = async (id) => await apiSister.get(`/pendidikan_formal?id_sdm=${id}`).then(res=>res.data).catch(err=>err)
export const fetchDetailPendidikanFormal = async (id) => await apiSister.get(`/pendidikan_formal/${id}`).then(res=>res.data).catch(err=>err)

export const fetchKesejahteraan = async (id) => await apiSister.get(`/kesejahteraan?id_sdm=${id}`).then(res=>res.data).catch(err=>err)
export const fetchDetailKesejahteraan = async (id) => await apiSister.get(`/kesejahteraan?/${id}`).then(res=>res.data).catch(err=>err)

export const fetchTunjangan = async (id) => await apiSister.get(`/tunjangan?id_sdm=${id}`).then(res=>res.data).catch(err=>err)
export const fetchDetailTunjangan = async (id) => await apiSister.get(`/tunjangan/${id}`).then(res=>res.data).catch(err=>err)

export const fetchListDokumen = async (id) => await apiSister.get(`/dokumen?id_sdm=${id}`).then(res=>res.data).catch(err=>err)
export const fetchDetailDokumen = async (id) => await apiSister.get(`/dokumen/${id}`).then(res=>res.data).catch(err=>err)

