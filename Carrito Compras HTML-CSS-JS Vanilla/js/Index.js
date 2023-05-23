
const botonVaciar = document.querySelector('#borrar')
const container = document.querySelector("div.container")
const subtitulo = document.querySelector("h3")
const button = document.querySelector("button")
const sandwiches = []
let indexCarro = recuperarCarrito() || []

async function obtenerDatos()
{
    const respuesta = await fetch("js/productos.json")
    const datos = await respuesta.json()
        sandwiches.push(...datos) 
        await cargarSandwich()
        asignarClicks()
    }

function templateSandwich(sandwiches)
{
    return `<div class="card" id="cardSandwich">
         <div class="card-name">${sandwiches.nombre}</div>
         <div class="card-image"><img src="${sandwiches.img}"</div>
        </div>
        <div class="card-desc">${sandwiches.desc}</div>
        <div class="card-price">${sandwiches.precio} $</div>
        <div class="card-button">
           <button class="button button-outline button-add" id="${sandwiches.id}" title="Añadir sandwich">Añadir</button>
        </div>
    </div>` 
    
    }
    

async function cargarSandwich()
{
   let cartas = ""
   sandwiches.forEach(element => {cartas += templateSandwich(element)})
   container.innerHTML = cartas;
}

function asignarClicks(){
    
    const botones = document.querySelectorAll(".button.button-outline.button-add")
    
    botones.forEach(boton => 
        {
            boton.addEventListener("click", ()=> 
    {
        let resultado = sandwiches.find(sand => sand.id === parseInt(boton.id))
        if(resultado !== undefined)
        {
            agregarAlCarrito(resultado)
            window.alert("Se ha agregado un producto a su carrito!");
            guardarCarrito(indexCarro);
        }
    }
                                                    )
                            }
    
    )
}

function agregarAlCarrito(prod)
{
    let nuevoProd = {desc: prod.desc, id: prod.id, nombre: prod.nombre, cantidad : 1, precio : prod.precio, img:prod.img}
    let posicion = indexCarro.findIndex(producto=> producto.nombre === prod.nombre)
    if(posicion !== -1){
        indexCarro[posicion].cantidad++
    }
    else{

        indexCarro.push(nuevoProd)
    }


}

 botonVaciar.addEventListener("click", function()
 {
    window.alert("Se ha vaciado el carrito!")
    localStorage.clear()
    indexCarro = []
 }                        
                             )

 
obtenerDatos();








