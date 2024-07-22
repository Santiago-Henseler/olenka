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

const client = new MercadoPagoConfig({ accessToken:  process.env.TokenMp || 'APP_USR-2999873462345921-011012-fc49e1db74284c44996d7a0808f2d62e-390171953' });

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log("server en el puerto", port)
});

app.get("/", (req, res)=>{
    res.send("")
})

app.get("/success", (req, res)=>{

    let CARRITO = global.pedido.carrito;
    let datos = global.pedido.datos;

    var texto = `Pedido realizado por ${datos.nombre} ${datos.apellido}, Tel: ${datos.telefono}, Mail: ${datos.mail}.
    Domicilio en ${datos.domicilio}, codigo postal ${datos.cp} a entregar en ${datos.envio}.`;

    let total = 0;

    let html = '';


    html += `<html>
            <body>
                <p>Pedido realizado por ${datos.nombre} ${datos.apellido}, Tel: ${datos.telefono}, Mail: ${datos.mail}.
                Domicilio en ${datos.domicilio}, codigo postal ${datos.cp} a entregar en ${datos.envio}</p>
                <br>
                <p><span>Producto</span>  <span>Talle</span>  <span>Cantidad</span>  <span>Color</span>  <span>Total</span></p>
                <br>
                <ul>
                    `

    for(let i in CARRITO){
        texto += ` ${CARRITO[i]["nombre"]} - ${CARRITO[i]["talle"]} - ${CARRITO[i]["color"]} - ${CARRITO[i]["cantidad"]} - ${CARRITO[i]["precio"] * CARRITO[i]["cantidad"]}`;
        html += ` <li><span>${CARRITO[i]["nombre"]}</span>  <span>${CARRITO[i]["talle"]}</span> <span>${CARRITO[i]["color"]}</span> <span>${CARRITO[i]["precio"] * CARRITO[i]["cantidad"]}</span> </li> `
        total += CARRITO[i]["precio"] * CARRITO[i]["cantidad"];
    }

    texto += "total $${total}"

    var tel = +5491161625030;

    var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;

    html += `</ul><p>Total: <span>${total}</span></p></body></html>`

    const mailOptions = {
        from: 'olenkaenvios@gmail.com',
        to: 'Griseldabparedes@hotmail.com',
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


    res.redirect(`https://santiago-henseler.github.io/olenka/success.html`);
})

app.post("/a", async (req, res)=>{

    global.pedido = req.body;

    let CARRITO = global.pedido.carrito;

    let item = []

    for(let i in CARRITO){
        item.push({
            title: CARRITO[i]["nombre"] + " color: " + CARRITO[i]["color"] + " talle: " + CARRITO[i]["talle"],
            quantity: Number(CARRITO[i]["cantidad"]),
            unit_price: Number(CARRITO[i]["precio"]),
            currency_id: "ARS",
        })
    }

    try{

        const body = {
            items:item,
            back_urls:{
                success:`https://olenka-fa9w.onrender.com/success`,
                failure:"https://santiago-henseler.github.io/olenka/error.html",
                pending:"",
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