// for (let i = 1; i <= 10; i++) {
//     let nombreDeUsuario = prompt("Ingrese nombre de usuario.");
//     let mensaje = `Bienvenido ${nombreDeUsuario} eres el Usuario: ${i}!`;
//     document.write(`${nombreDeUsuario} Usuario ${i}` + "<br>");
//     alert(mensaje);
// }


const suma =  (a, b) => { return a + b}
const resta = (a, b) => { return a - b}

const iva = x => x* 0.21
let precioAuto = 1000
let descuento = 50

let nuevoPrecio = resta(suma(precioAuto, iva(precioAuto)), descuento)
console.log(nuevoPrecio)

if(nuevoPrecio >= 1000 && nuevoPrecio < 2000){
    console.log("honda toyota")
}else if(nuevoPrecio >= 2000 && nuevoPrecio < 6000)
{
    console.log("volkswagen");
}