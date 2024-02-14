var hay_seccion = false;

function enviar_mensaje() {

    var nombre = document.getElementById("nombre").value;


    var txt = document.getElementById("campo1").value;

    var texto = `Hola me llamo ${nombre}, 
    y estamos interesados en trabajar con ustedes.
    Mis aclaraciones/comentarios son: ${txt}`;

    var tel = +5411;

    var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;

    window.open(url);
    return;
}

function inicio(){

    if(hay_seccion){
        
        let main = document.getElementById("main");
        let elemento = document.getElementById("seccion_prod");
        main.removeChild(elemento);

        hay_seccion = false;

        document.getElementById("uno").style.display = "block";
        document.getElementById("categoria").style.display = "block";
        document.getElementById("ofertas").style.display = "block";
    }

    return;
}

function tipo_producto(type){

    if(type == "remeras"){
        return remeras;
    }
}

function crear_producto(){
    
    let main = document.getElementById("main");

    document.getElementById("seccion_prod").style.display = "none";

    let type = "hol213";

    main.insertAdjacentHTML('afterbegin', `
    
    <style>
        #${type}{
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
            48% {
              transform: translate3d(-100%,0,0);
            }
            50%,
            73% {
              transform: translate3d(-200%,0,0);
            }
            75%,
            98% {
              transform: translate3d(-100%,0,0);
            }
            100% {
              transform: translate3d(0,0,0);
            }
          }


    </style>
    
    <section id="${type}"class="single_product_details_area d-flex align-items-center">

        <!-- Single Product Thumb -->
        <div class="single_product_thumb clearfix" id="slider-container">
            <img src="img/product-img/product-big-1.jpg" alt="">
            <img src="img/product-img/product-big-2.jpg" alt="">
            <img src="img/product-img/product-big-3.jpg" alt="">
        </div>

        <!-- Single Product Description -->
        <div id="descripcion" class="single_product_desc clearfix">
            <span>mango</span>
            <a href="cart.html">
                <h2>One Shoulder Glitter Midi Dress</h2>
            </a>
            <p class="product-price"><span class="old-price">$65.00</span> $49.00</p>
            <p class="product-desc">Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>

            <!-- Form -->
            <form class="cart-form clearfix" method="post">
                <!-- Select Box -->
                <div class="select-box d-flex mt-50 mb-30">
                    <select name="select" id="productSize" class="mr-5">
                        <option value="value">Size: XL</option>
                        <option value="value">Size: X</option>
                        <option value="value">Size: M</option>
                        <option value="value">Size: S</option>
                    </select>
                    <select name="select" id="productColor">
                        <option value="value">Color: Black</option>
                        <option value="value">Color: White</option>
                        <option value="value">Color: Red</option>
                        <option value="value">Color: Purple</option>
                    </select>
                </div>
                <!-- Cart & Favourite Box -->
                <div class="cart-fav-box d-flex align-items-center">
                    <!-- Cart -->
                    <button type="submit" name="addtocart" value="5" class="btn essence-btn">Add to cart</button>
                    <!-- Favourite -->
                    <div class="product-favourite ml-4">
                        <a href="#" class="favme fa fa-heart"></a>
                    </div>
                </div>
            </form>
        </div>
    </section>`);


}

function crear_seccion(type){
   
    let main = document.getElementById("main");

    seccion = !!document.getElementById(`${type}`);

    if(!seccion && hay_seccion){
        let elemento = document.getElementById("seccion_prod");
        main.removeChild(elemento);
    }

    if(hay_seccion && seccion){
        return;
    }

    document.getElementById("uno").style.display = "none";
    document.getElementById("categoria").style.display = "none";
    document.getElementById("ofertas").style.display = "none";
   
    
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
        <div class="col-12 col-sm-6 col-lg-4" onclick="crear_producto()">
            
            <div class="single-product-wrapper">
                <!-- Product Image -->
                <div class="product-img">
                    <img src="img/product-img/product-9.jpg" alt="">
                    <!-- Hover Thumb -->
                    <img class="hover-img" src="img/product-img/product-1.jpg" alt="">

                    
                </div>

                <!-- Product Description -->
                <div class="product-description">
                    <span>Marca</span>
                    
                        <h6>${productos[i+1][0]}</h6>
                    
                    <p class="product-price">$${productos[i+1][1]}</p>

                   
                </div>
            </div>
            
        </div>`
    };

    hay_seccion = true;

    return;
}