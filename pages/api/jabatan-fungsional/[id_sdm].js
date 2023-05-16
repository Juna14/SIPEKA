export default function handler(req,res) {
    res.status(200).json(
        {
            "status": true,
            "message": "Tidak ada Data Jabatan Fungsional",
            "data": []
          }
    )
}