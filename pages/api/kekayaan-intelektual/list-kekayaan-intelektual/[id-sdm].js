export default function handler(req,res) {
    return res.status(200).json({
        status: true,
        message: "bla bla",
        data: [
            {
                id:1,
                golongan_pangkat:"koruptor",
                sk:"D34TH",
                terhitung_mulai_tanggal: Date.now(),
            },
            {
                "id": "00000000-0000-0000-0000-000000000000",
                "pangkat_golongan": "III/c (Penata)",
                "sk": "53979/A3/KP/2020",
                "tanggal_mulai": "2020-04-01"
            }
        ]
    })
}