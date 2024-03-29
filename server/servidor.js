import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olenkaenvios@gmail.com',
    pass:  process.env.TokenMail || 'wsjp uaxc kkaj sebg'
  }
});

const client = new MercadoPagoConfig({ accessToken:  process.env.TokenMp || 'APP_USR-4523751909000270-021516-39075fd86f9087b64a1d8b567fbf1991-689252510' });

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log("server en el puerto", port)
});

app.get("/", (req, res)=>{
    res.send("Que haces aca wachin?")
})

app.get("/success", (req, res)=>{

    let html = '';

    let CARRITO = global.pedido.carrito;
    let datos = global.pedido.datos;

    let total = 0;

    html += `<html>
            <body>
                <p>Pedido realizado por ${datos.nombre} ${datos.apellido}, Tel: ${datos.telefono}, Mail: ${datos.mail}.
                Domicilio en ${datos.domicilio}, codigo postal ${datos.cp} a entregar en ${datos.envio}</p>
                <br>
                <p><span>Producto</span> <span>Talle</span> <span>Cantidad</span> <span>Total</span></p>
                <br>
                <ul>
                    `

    for(let i in CARRITO){
        html += ` <li><span>${CARRITO[i]["nombre"]}</span>  <span>${CARRITO[i]["talle"]}</span> <span>$${CARRITO[i]["cantidad"]}</span> </li> `
        total += CARRITO[i]["precio"] * CARRITO[i]["cantidad"];
    }

    html += `</ul><p>Total: <span>${total}</span></p></body></html>`

    const mailOptions = {
        from: 'olenkaenvios@gmail.com',
        to: 'destinatario@example.com',
        subject: `Compra realizada por ${global.pedido.datos.nombre}`,
        html: html,
    };
  
    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Pago enviado ' + total);
        }
    });

    res.redirect('https://santiago-henseler.github.io/olenka/success.html');
})

app.post("/a", async (req, res)=>{

    global.pedido = req.body;

    try{

        const body = {
            items:[{
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS",
            }],
            back_urls:{
                success:`https://olenka-fa9w.onrender.com/success`,
                failure:"https://santiago-henseler.github.io/olenka/error.html",
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