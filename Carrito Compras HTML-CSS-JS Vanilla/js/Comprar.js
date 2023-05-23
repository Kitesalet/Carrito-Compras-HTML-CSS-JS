const carritoCheckout = recuperarCarrito() || []
const sandwiches= []

async function obtenerDatos()
    {
    const respuesta = await fetch("js/productos.json")
    const datos = await respuesta.json()
        sandwiches.push(...datos) 
    }

const shopping = new Comprar(carritoCheckout, '/index.html')

const tablera = document.querySelector("tbody")
const total = document.querySelector("H2")
const botonFinalizar = document.querySelector("#finalizar")
const noProd = document.querySelector("#SinProd")

async function verCarrito(array)
{

    if(array.length === 0)
    {
        let tabla = "No hay productos seleccionados!"
        noProd.innerHTML = tabla
    }
    else
    {
    let tabla = "<tr><td>Imagen</td><td>Nombre</td><td>Descripcion</td><td>Precio</td><td>Cantidad</td><td>Eliminar</td><td>Agregar</td></tr>"
    if(array.length > 0) 
    {
        array.forEach(sand => 
        {
            tabla += armarHTML(sand)
        }            );
        tablera.innerHTML = tabla
    }

}
}


async function eliminarProducto()
{

    const botonese = document.querySelectorAll(".button.button-delete")
    
    botonese.forEach(boton => 
        {
            boton.addEventListener("click", ()=> 
    {
        let resultado = sandwiches.find(sand => sand.id === parseInt(boton.id))

            let posicion = carritoCheckout.findIndex(produID  => produID.nombre === resultado.nombre)

            if(carritoCheckout[posicion].cantidad === 1)
            {
            carritoCheckout.splice(posicion,1)
            }
            else
            {
                carritoCheckout[posicion].cantidad--
            }

            guardarCarrito(carritoCheckout)

            location.href = "/checkout.html"
           


        }
        )


     }
    )


}

async function agregarProducto()
{

    const botoneser = document.querySelectorAll(".button.button-add")
    
    botoneser.forEach(boton => 
        {
            boton.addEventListener("click", ()=> 
    {
        let resultado = sandwiches.find(sand => sand.id === parseInt(boton.id))

            let posicion = carritoCheckout.findIndex(produID  => produID.nombre === resultado.nombre)
         
            carritoCheckout[posicion].cantidad++

            guardarCarrito(carritoCheckout)

            location.href = "/checkout.html"
           


        }
        )


     }
    )


}


function armarHTML(x){
  return  ` 
  <tr>
    <td><img src="${x.img}"</div></td>
    <td>${x.nombre}</td>
    <td>${x.desc}</td>
    <td>${x.precio} $</td>
    <td>${x.cantidad}</td>
    <td><div><button class="button button-delete" id="${x.id}" title="Eliminar">-</button></div></td>
    <td><div><button class="button button-add" id="${x.id}" title="Anadir">+</button></div></td>
</tr>
` 
}

obtenerDatos();
verCarrito(shopping.carrito);
eliminarProducto();
agregarProducto();
shopping.totalDelCarrito();
shopping.confirmarCompra();






