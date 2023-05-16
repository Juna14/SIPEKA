import { api } from "./axios";

export const fetchAlamat = async (id) => await api.get(`/data-pribadi/alamat/${id}`).then(res=>res.data) 
export const fetchProfil = async (id) => await api.get(`/data-pribadi/profil/${id}`).then(res=>res.data) 
export const fetchKependudukan = async (id) => await api.get(`/data-pribadi/kependudukan/${id}`).then(res=>res.data) 
export const fetchLainLain = async (id) => await api.get(`/data-pribadi/lain/${id}`).then(res=>res.data) 
export const fetchKeluarga = async (id) => await api.get(`/data-pribadi/keluarga/${id}`).then(res=>res.data) 
export const fetchKepegawaian = async (id) => await api.get(`/data-pribadi/kepegawaian/${id}`).then(res=>res.data) 
export const fetchBidangIlmu = async (id) => await api.get(`/data-pribadi/bidang-ilmu/${id}`).then(res=>res.data) 

export const fetchListInpassing = async (id) => await api.get(`/inpassing/list-inpassing/${id}`).then(res=>res.data) 
export const fetchDetailInpassing = async (id) => await api.get(`/inpassing/detail-inpassing/${id}`).then(res=>res.data) 
export const fetchListJabatanFungsional = async (id) => await api.get(`/jabatan-fungsional/list-jabatan-fungsional/${id}`).then(res=>res.data) 
export const fetchDetailJabatanFungsional = async (id) => await api.get(`/jabatan-fungsional/detail-jabatan-fungsional/${id}`).then(res=>res.data) 
export const fetchListKepangkatan = async (id) => await api.get(`/kepangkatan/list-kepangkatan/${id}`).then(res=>res.data) 
export const fetchDetailKepangkatan = async (id) => await api.get(`/kepangkatan/detail-kepangkatan/${id}`).then(res=>res.data) 
export const fetchListPenempatan = async (id) => await api.get(`/penempatan/list-penempatan/${id}`).then(res=>res.data) 
export const fetchDetailPenempatan = async (id) => await api.get(`/penempatan/detail-penempatan/${id}`).then(res=>res.data) 

export const fetchListPenelitian = async (id) => await api.get(`/penelitian/list-penelitian/${id}`).then(res=>res.data)
export const fetchDetailPenelitian = async (id) => await api.get(`/penelitian/detail-penelitian/${id}`).then(res=>res.data)
export const fetchListPublikasi = async (id) => await api.get(`/publikasi/list-publikasi/${id}`).then(res=>res.data)
export const fetchDetailPublikasi = async (id) => await api.get(`/publikasi/detail-publikasi/${id}`).then(res=>res.data)

export const fetchListKateogriCapaianLuaran = async () => await api.get(`/referensi/kategori-capaian-luaran`).then(res=>res.data).catch(err=>err)
export const fetchPerguruanTinggi = async () => await api.get(`/referensi/perguruan-tinggi`).then(res=>res.data).catch(err=>err)
export const fetchKategoriKegiatan = async () => await api.get(`/referensi/kategori-kegiatan`).then(res=>res.data).catch(err=>err)
export const fetchGolonganPangkat = async () => await api.get(`/referensi/golongan-pangkat`).then(res=>res.data).catch(err=>err)
export const fetchJabatanFungsional = async () => await api.get(`/referensi/jabatan-fungsional`).then(res=>res.data).catch(err=>err)
