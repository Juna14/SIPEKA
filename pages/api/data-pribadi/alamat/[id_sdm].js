export default function handler(req, res) {
  res.status(200).json(
    {
      "status": true,
      "message": "Alamat berhasil diambil",
      "data": [
        {
          "id": 1,
          "id_sdm": "a0a07ef9-1a61-46d2-b00b-ea4d580e714a",
          "email": "tegar@lecturer.itk.ac.id",
          "alamat": "Komp Pondok Joang Indah Blok A5/14 ",
          "rt": 54,
          "rw": 1,
          "dusun": null,
          "kelurahan": "Karang Joang",
          "id_kota_kabupaten": 166103,
          "kode_pos": null,
          "telepon_rumah": null,
          "telepon_hp": "082245051582",
          "wilayah": {
            "id_sister": 166103,
            "nama": "Kec. Balikpapan Utara"
          }
        }
      ]
    }
  );
}

