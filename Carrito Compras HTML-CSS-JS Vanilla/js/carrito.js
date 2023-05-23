const carrito = []

function guardarCarrito(carrito){
    localStorage.setItem("carrito",JSON.stringify(carrito))
}

function recuperarCarrito(){
   return JSON.parse(localStorage.getItem("carrito"))
}