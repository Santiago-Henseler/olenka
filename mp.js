function pagos(total, carrito){
    const mp = new MercadoPago('APP_USR-ec551596-b82e-4a71-a24a-c916181e073b', {
        locale: "es-AR",
    });
    
    document.getElementById("btn-checkout-mp").addEventListener("click", async() => {

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var domicilio = document.getElementById("domicilio").value;
        var cp = document.getElementById("cp").value;
        var telefono = document.getElementById("telefono").value;
        var mail = document.getElementById("mail").value;

        var radios = document.getElementsByName("retiro");
        var selected = Array.from(radios).find(radio => radio.checked).value;

        if(nombre == '' || apellido == '' || domicilio == '' || cp == '' || telefono == '' || mail == '' || selected == ''){
            swal("Completa toda la información antes del pago", "", "info");
            return;
        } 

        const datos_personales = {
            nombre: nombre,
            apellido: apellido,
            domicilio: domicilio,
            cp:cp,
            telefono:telefono,
            mail:mail,
            envio:selected,
        }
       
        const orderData = {
            title: "Pago Olenka",
            quantity: 1,
            price: total,
            datos:datos_personales,
            carrito:carrito,
        };

        try{
            swal("Creando cupon de pago, porfavor espere", "", "info");
            const response = await fetch("https://olenka-fa9w.onrender.com/a", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
        
            const preference = await response.json();
        
            createCheckouButton(preference.id);
    
        } catch(error){
            console.log(error)
        }
    });

    const createCheckouButton = (id) => {
        const bricksBuilder = mp.bricks();

        document.getElementById("btn-checkout-mp").style.display = 'none';
    
        const renderComponent = async () => {

            await bricksBuilder.create("wallet", "wallet_container", {
                initialization: {
                    preferenceId: id,
                },
             });
        }
    
        renderComponent();
    }
}


