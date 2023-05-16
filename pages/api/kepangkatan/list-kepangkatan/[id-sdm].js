export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
              "sk": "16/IT10/KP.02/2021",
              "tanggal_mulai": "2021-01-04",
              "id": "ab2f2b4c-e4b8-4c38-8c53-158f7e435088",
              "pangkat_golongan": "III/b (Penata Muda Tk. I)"
            }
          ]
    })
}