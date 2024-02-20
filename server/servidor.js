import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'APP_USR-4523751909000270-021516-39075fd86f9087b64a1d8b567fbf1991-689252510' });

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log("server en el puerto", port)
});

app.get("/", (req, res)=>{
    res.send("hola")
})

app.post("/a", async (req, res)=>{
    try{
        const body = {
            items:[{
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS",
            }],
            back_urls:{
                success:"https://www.youtube.com/",
                failure:"https://www.youtube.com/",
                pending:"https://www.youtube.com/",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);

        const result = await preference.create({body});
        res.json({
            id: result.id,
        })

    }catch(error){
        console.log("error")
        res.status(404).json({
            error: "Error al crear boton",
        })
    }
})
