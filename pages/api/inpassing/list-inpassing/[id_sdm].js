export default function handler(req,res) {
    return res.status(200).json(
        {
        status: true,
        message: "Bla bla",
        data: [
            // {
            //     "id": "00000000-0000-0000-0000-000000000000",
            //     "pangkat_golongan": "IV/b (Pembina Tk. I)",
            //     "sk": "16261/A2.3/KP/2018",
            //     "tanggal_sk": "2018-04-23",
            //     "tanggal_mulai": "2018-04-01"
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Koruptor",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Pejabat",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Tikus kantor",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Polri",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"TNI",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Polda",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
            // {
            //     id:1,
            //     pangkat_golongan:"Abri",
            //     sk:"D34TH",
            //     tanggal_sk: new Date(Date.now()).toDateString(),
            //     tanggal_mulai: new Date(Date.now()).toDateString(),
            // },
        ]
    }
    )
}