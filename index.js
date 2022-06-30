

for (let i = 1; i <= 10; i++) {
    let nombreDeUsuario = prompt("Ingrese nombre de usuario.");
    let mensaje = `Bienvenido ${nombreDeUsuario} eres el Usuario: ${i}!`;
    document.write(`${nombreDeUsuario} Usuario ${i}` + "<br>");
    alert(mensaje);
}