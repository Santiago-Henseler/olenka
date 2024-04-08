var hay_seccion = false;
var hay_producto = false;
var hay_checkout = false;
var hay_vintage = false;

const cpOrigen = 1878;

var CARRITO = [];

class creador {
    constructor(nombre,talle, precio, cantidad, color) {
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
        this.color = color;
    }
}

function enviar_mensaje() {

    calcular_envio()

    var nombre = document.getElementById("nombre").value;

    var txt = document.getElementById("campo1").value;

    var texto = `Hola me llamo ${nombre}, 
    y tengo la siguiente consulta: ${txt}`;

    var tel = +5491161625030;

    var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;

    window.open(url);
    return;
}

async function calcular_envio(){
    const url = 'https://correo-argentino1.p.rapidapi.com/calcularPrecio?cpOrigen=1878&cpDestino=1876&provinciaOrigen=AR-B&provinciaDestino=AR-B&peso=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0a4e29254msh1d48fd45f9d7843p18bc2cjsn8b85d259666a',
            'X-RapidAPI-Host': 'correo-argentino1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function inicio(){

    window.scrollTo(0,0);

    if(hay_checkout){
        return;
    }

    let main = document.getElementById("main");

    if(hay_seccion){
        let elemento = document.getElementById("seccion_prod");
        main.removeChild(elemento);

        hay_seccion = false;
    }

    if(hay_producto){
        let elemento = document.getElementById("product");
        main.removeChild(elemento);

        hay_producto = false;
    }

    document.getElementById("uno").style.display = "block";
    document.getElementById("categoria").style.display = "block";

    return;
}

function cargar_cant_producto(){

    let cantProd = CARRITO.length;

    document.getElementById("cantprod1").innerHTML = cantProd;
    document.getElementById("cantprod2").innerHTML = cantProd;

    let total = 0;

    for(let i = 0; i < CARRITO.length; i++){

        total += CARRITO[i]['precio'] * CARRITO[i]['cantidad'];

    }

    document.getElementById("Total").innerHTML = `$${total}`;
}

function borrar(producto, talle, color, id){
    for (i in CARRITO) {
        if (CARRITO[i]["nombre"] == producto  && CARRITO[i]["talle"] == talle && CARRITO[i]["color"] == color) {
            CARRITO.splice(i, 1);
            
        }
    }
    
    document.getElementById(id).remove();

    cargar_cant_producto();

    swal("Producto borrado del carrito", "", "success");
}

function existe_producto(producto, talle, cantidad, color){

    let existe = false;

    for (i in CARRITO) {
        if (CARRITO[i]["nombre"] == producto && CARRITO[i]["talle"] == talle && CARRITO[i]["color"] == color) {
            existe = true;
            CARRITO[i]["cantidad"] += cantidad;
            document.getElementById(`cantidad${CARRITO[i]["nombre"]}${talle}`).innerHTML = `Cantidad: ${CARRITO[i]["cantidad"]}`;
            document.getElementById(`price${CARRITO[i]["nombre"]}${talle}`).innerHTML = `$${CARRITO[i]["cantidad"] * CARRITO[i]["precio"]}`;
        }
    }

    return existe;
}

function checkout(){

    window.scrollTo(0,0);

    if(CARRITO.length == 0){
        return;
    }

    hay_checkout = true;

    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "none";
    document.getElementById("cart1").style.display = "none";

    document.getElementById("uno").style.display = "none";
    document.getElementById("categoria").style.display = "none";

    if(hay_seccion){
        let elemento = document.getElementById("seccion_prod");
        main.removeChild(elemento);

        hay_seccion = false;
    }

    if(hay_producto){
        let elemento = document.getElementById("product");
        main.removeChild(elemento);

        hay_producto = false;
    }

    main.insertAdjacentHTML('afterbegin',`
    <div class="checkout_area section-padding-80">
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-6">
                    <div class="checkout_details_area mt-50 clearfix">

                        <div class="cart-page-heading mb-30">
                            <h5>Datos de la compra</h5>
                        </div>

                        <form action="#" method="post">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="first_name">Nombre <span>*</span></label>
                                    <input type="text" class="form-control" id="nombre" value="" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="last_name">Apellido <span>*</span></label>
                                    <input type="text" class="form-control" id="apellido" value="" required>
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="street_address">Domicilio <span>*</span></label>
                                    <input type="text" class="form-control mb-3" id="domicilio" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="postcode">Codigo postal <span>*</span></label>
                                    <input type="text" class="form-control" id="cp" value="">
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="phone_number">Numero de telefono<span>*</span></label>
                                    <input type="number" class="form-control" id="telefono" min="0" value="">
                                </div>
                                <div class="col-12 mb-4">
                                    <label for="email_address">Email<span>*</span></label>
                                    <input type="email" class="form-control" id="mail" value="">
                                </div>
 
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div class="order-details-confirmation">

                        <div class="cart-page-heading">
                            <h5>Tu compra</h5>
                            <p style="color:red">Todos los productos se entregan de 7 a 10 dias</p>
                        </div>

                        <ul id="list_prod" class="order-details-form mb-4">
                            <li><span>Producto</span> <span>Talle</span> <span>Color</span> <span>Cantidad</span> <span>Total</span></li>
                        </ul>

                        <div id="accordion" role="tablist" class="mb-4">
                        <!-- ##### Welcome Area Start #####
                                <div >
                                <input class="form-check-input"  type="radio" name="retiro" id="op1" value="Quilmes">Retiro en Quilmes
                                    <div class="card-body">
                                        <p>Retiro en quilmes en la calle ..... de ... a ....</p>
                                    </div>
                                </div>

                                <div >
                                <input class="form-check-input"  type="radio" name="retiro" id="op1" value="Capital">Retiro en Capital
                                    <div class="card-body">
                                        <p>Retiro en quilmes en la calle ..... de ... a ....</p>
                                    </div>
                                </div>

                                <div >
                                <input class="form-check-input"  type="radio" name="retiro" id="op1" value="Domicilio">Envio a domicilio
                                    <div class="card-body">
                                        <p>Retiro en quilmes en la calle ..... de ... a ....</p>
                                    </div>
                                </div>

                                -->
                            
                        </div>

                        <div id="btn-checkout-mp" class="btn essence-btn">PAGAR</div>
                        <div id="wallet_container"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    

    main.insertAdjacentHTML('afterbegin', `    
    <div class="breadcumb_area bg-img" style="background-image: url(img/bg-img/breadcumb.jpg);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="page-title text-center">
                        <h2>PAGO</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
 
    let list_prod =  document.getElementById("list_prod");

    let total = 0;

    for(i in CARRITO){
        list_prod.innerHTML += ` <li><span>${CARRITO[i]["nombre"]}</span>  <span>${CARRITO[i]["talle"]}</span> <span>${CARRITO[i]["color"]}</span><span>${CARRITO[i]["cantidad"]}</span><span>${CARRITO[i]["precio"] * CARRITO[i]["cantidad"]}</span></li> `
        total += CARRITO[i]["precio"] * CARRITO[i]["cantidad"];
    }

    list_prod.innerHTML +=`<li><span></span><span>${total}</span>`

    pagos(total, CARRITO);
}

function aniadir_al_carrito(type, id){

    let tipo = tipo_producto(type);
    let talle = document.getElementById("talle").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let colorLabel = document.getElementById("color");
    let color = "";

    if(document.body.contains(colorLabel)){
        color = colorLabel.value;
    }

    if(talle == ""){
        talle = "unico"
    }


    if(!existe_producto(tipo[parseInt(id)][0],talle, 1, color)){

        const producto = new creador(tipo[parseInt(id)][0], talle, tipo[parseInt(id)][1], cantidad, color);

        CARRITO.push(producto);

        let carritoHTML = document.getElementById("cart-list");

        carritoHTML.innerHTML += `
        <div class="single-cart-item" id="${tipo[parseInt(id)][0]}${color}${talle}">
            <a href="#" class="product-image">
                <img src="${tipo[parseInt(id)][3][0]}" class="cart-thumb" alt="">
                <div class="cart-item-desc">
                    <button type="button" value="${tipo[parseInt(id)][0]}${color}${talle}" onclick="borrar('${tipo[parseInt(id)][0]}','${talle}', '${color}',this.value)" ><span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span></button>
                    
                    <h6>${tipo[parseInt(id)][0]}</h6>
                    <p class="size">Talle: ${talle}</p>
                    <p class="color" id="cantidad${tipo[parseInt(id)][0]}${talle}">Cantidad: ${cantidad}</p>
                    <p class="color" id="cantidad${tipo[parseInt(id)][0]}${color}">Color: ${color}</p>
                    <p class="price" id="price${tipo[parseInt(id)][0]}${talle}">$ ${tipo[parseInt(id)][1] * cantidad}</p>
                </div>
            </a>
        </div>`
    }

    cargar_cant_producto();

    swal("Producto añiadido al carrito", "", "success");
}

function tipo_producto(type){

    if(type == "remeras"){
        return remeras;
    }
    if(type == "buzos"){
        return buzos;
    }
    if(type == "overol"){
        return overols;
    }
    if(type == "accesorios"){
        return accesorios;
    }
    if(type == "vestidos"){
        return vestidos;
    }
    if(type == "camperas"){
        return camperas;
    }
    if(type == "blazer"){
        return blazer;
    }
}

function crear_producto(type, id){

    window.scrollTo(0,0);

    let main = document.getElementById("main");

    if(hay_seccion){
        document.getElementById("seccion_prod").style.display = "none";
    }else{
        document.getElementById("uno").style.display = "none";
        document.getElementById("categoria").style.display = "none";
        document.getElementById("ofertas").style.display = "none";
    }
    
    if(type == "vintage"){
        hay_vintage =true;
    }

    let producto = tipo_producto(type);

    main.insertAdjacentHTML('afterbegin', `
    
    <style>

        #${type}}{
            background-color:#fff;
            position:relative;
            margin:0px;
            z-index: 15;
            width:100%;
            min-height: 100%;
        }

        #descripcion{
            z-index:16;
            background-color: #fff;
        }

        #slider-container {
            display: flex;
            width: 300%;
            animation: carousel 30s linear infinite;
        }

        #slider-container img {
            display: inline-block;
            width:100%;
            float: left;
        }

        @keyframes carousel {
            /* add/remove steps if more/less images */
            0%,
            23% {
              transform: translate3d(0,0,0);
            }
            25%,
            38% {
              transform: translate3d(-100%,0,0);
            }
            48%,
            54% {
              transform: translate3d(-200%,0,0);
            }
            65%,
            70% {
              transform: translate3d(-300%,0,0);
            }
            78%,
            82% {
              transform: translate3d(-200,0,0);
            }
            85%,
            92%{
                transform: translate3d(-100,0,0);
            }
            98%,
            100%{
                transform: translate3d(0,0,0);
            }
          }


    </style>
    <section id="product">
        <div id="${type}${id}" class="single_product_details_area d-flex align-items-center">

        <!-- Single Product Thumb -->
            <div class="single_product_thumb clearfix" id="slider-container">
                <img src="${producto[id][3][0]}" alt="">
                <img src="${producto[id][3][1]}" alt="">
                <img src="${producto[id][3][2]}" alt="">
                <img src="${producto[id][3][3]}" alt="">
            </div>

        <!-- Single Product Description -->
            <div id="descripcion" class="single_product_desc clearfix">
            
                <h2>${producto[id][0]}</h2>
                
                <!--<p class="product-price"><span class="old-price">$65.00</span> $49.00</p>-->
                <p class="product-price">$ ${producto[id][1]}</p>
                <p class="product-desc">${producto[id][2]}</p>

                <!-- Form -->
                <div class="cart-form clearfix" method="post">
                    <!-- Select Box -->
                    <div class="select-box d-flex mt-50 mb-30">
                        <select name="select" id="talle" class="mr-5">
                        </select>
                         
                        <select name="select" id="color" class="mr-5">
                            
                        </select>

                        <select name="select" id="cantidad">
                            <option value="1">Cantidad: 1</option>
                            <option value="2">Cantidad: 2</option>
                            <option value="3">Cantidad: 3</option>
                            <option value="4">Cantidad: 4</option>
                        </select>
                    </div>
                    <!-- Cart & Favourite Box -->
                    <div class="cart-fav-box d-flex align-items-center">
                        <!-- Cart -->
                        <button type="submit" name="addtocart" onclick="aniadir_al_carrito('${type}',${id})" class="btn essence-btn">Añiadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`);

    var tal = producto[id][5].splice(",");

    if(tal.length > 0){

        for(var i = 0; i < tal.length; i++ ){
            document.getElementById("talle").innerHTML+= `<option value="${tal[i]}">Size: ${tal[i]}</option>`
        }

    }else{
        document.getElementById("talle").style.display = 'none';
    }

    var col = producto[id][4].splice(",");

    if(col.length > 0){
        for(var i = 0; i < col.length; i++ ){
            document.getElementById("color").innerHTML+= `<option value="${col[i]}">Color: ${col[i]}</option>`
        }
    }else{
        document.getElementById("color").style.display = 'none';
    }


    hay_producto = true;
}

function crear_seccion(type){
   
    window.scrollTo(0,0);

    let main = document.getElementById("main");

    seccion = !!document.getElementById(`${type}`);

    if(hay_producto){
        let elemento = document.getElementById("product");
        main.removeChild(elemento);
        if(!hay_vintage){
            document.getElementById("seccion_prod").style.display = "block";
        }
        hay_producto = false;
    }



    if(!seccion && hay_seccion){
        let elemento = document.getElementById("seccion_prod");
        main.removeChild(elemento);
    }

    if(hay_seccion && seccion){
        return;
    }

    document.getElementById("uno").style.display = "none";
    document.getElementById("categoria").style.display = "none";
   
    
    let productos = tipo_producto(type);
    let total = productos[0];

    main.insertAdjacentHTML('afterbegin', `
    
    <style>
        #${type}{
            background-color:#fff;
            position:relative;
            margin:0px;
            z-index: 10;
            width:100%;
            min-height: 100%;
        }
    </style>
    
    <section id="seccion_prod">
        <div id="${type}" class="shop_grid_area section-padding-80">
            <div id="cont${type}" class="container">
                <div id="row${type}" class="row">
                                        
                </div>
            </div>
        </div> 
    </section>`);

    let prod_site = document.getElementById(`row${type}`);  
    
    prod_site.innerHTML += `
    <div class="breadcumb_area bg-img" style="background-image: url(img/bg-img/breadcumb.jpg);margin-bottom: 10px;">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="page-title text-center">
                        <h2>${type}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ` 
    for(let i = 0; i < total; i++){
        prod_site.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4" onclick="crear_producto('${type}', ${i+1})">
            
            <div class="single-product-wrapper">
                <!-- Product Image -->
                <div class="product-img">
                    <img src="${productos[i+1][3][0]}" alt="">
                    <!-- Hover Thumb -->
                    <img class="hover-img" src="${productos[i+1][3][1]}" alt="">

                    
                </div>

                <!-- Product Description -->
                <div class="product-description">
                    <span></span>
                    
                        <h6>${productos[i+1][0]}</h6>
                    
                    <p class="product-price">$${productos[i+1][1]}</p>

                   
                </div>
            </div>
            
        </div>`
    };

    hay_seccion = true;

    return;
}