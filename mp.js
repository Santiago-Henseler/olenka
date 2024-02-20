function pagos(total){
    const mp = new MercadoPago('APP_USR-ec551596-b82e-4a71-a24a-c916181e073b', {
        locale: "es-AR",
    });
    
    document.getElementById("btn-checkout-mp").addEventListener("click", async() => {
       
        const orderData = {
            title: "Pago Olenka",
            quantity: 1,
            price: total,
        };
    
        try{
            const response = await fetch("http://localhost:3000/a", {
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
    
        const renderComponent = async () => {
            if(window.checkouButton) window.checkouButton.unmount();
            await bricksBuilder.create("wallet", "wallet_container", {
                initialization: {
                    preferenceId: id,
                },
             });
        }
    
        renderComponent();
    }
}


