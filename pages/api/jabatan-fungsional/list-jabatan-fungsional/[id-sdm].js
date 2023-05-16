export default function handler(req,res) {
    res.status(200).json(
        {
            status: true,
            message: "bla bla",
            data: [
                {
                  "id": "00000000-0000-0000-0000-000000000000",
                  "jabatan_fungsional": "Asisten Ahli (150.00)",
                  "sk": "47/IT3/KP.01.00/2020",
                  "tanggal_mulai": "2020-03-01"
                }
              ]
        }
    )
}