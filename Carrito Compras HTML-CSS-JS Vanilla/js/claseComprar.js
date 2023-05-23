
class Comprar{
    constructor(carrito, documento)
    {
     this.carrito = carrito;
     this.documento = documento;
    }

    totalDelCarrito()
    {
        let valor = 0
        if(shopping.carrito.length !== 0){
             valor = shopping.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
        }
    
        let templateDinero = `<h2>La cantidad de dinero a abonar es de: ${valor} $</h2>`
    
        total.innerHTML = templateDinero;
    
    }
    
    async confirmarCompra()
    {
        botonFinalizar.addEventListener("click", function()
        {
            
            if(shopping.carrito.length !== 0)
            {
                let confirmar = window.confirm("Esta seguro que desea confirmar la compra?")
    
                if(confirmar === true)
                {
                    localStorage.removeItem('carrito')
                    window.alert("Gracias por su compra!")
                    shopping.carrito = []
                    location.href = shopping.documento
                }
            }
            else
            {
                window.alert("Debe seleccionar como minimo un sanguche para proseguir con la compra!")
            }
    
        }
                                        )
    }
    
}
