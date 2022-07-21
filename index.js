// let boton = document.getElementById("brtnPrincipal");
// let evento = prompt("ingresa el evento");
// const respuestaClick = () =>{
    //     console.log("Respuesta evento");
    // }
// boton.addEventListener(evento, respuestaClick);

let headerContainer = document.getElementById("headerContainer");
console.log(headerContainer.innerHTML);
headerContainer.innerHTML = "<h1>Welcome to classic cars shop!</h1>"

let products = document.getElementById("productsContainer");
let cars = [
    {brand: "Toyota", model:"Supra", year:1999, price: 28000, photo: "assets/toyotaSupra1999.jpg", id:1},
    {brand: "Mazda", model:"Miata Mx", year:1998, price: 21000, photo: "assets/mazdaMiata1998.jpg", id:2},
    {brand: "Nissan", model:"GT-R Skyline", year:1999, price: 48000, photo: "assets/nissanSkyline1999.jpg", id:3},
    {brand: "Subaru", model:"Impreza", year:2003, price: 34000, photo: "assets/subaruImpreza2003.jpg", id:4},
];
for(const car of cars){
    let productCard = document.createElement(`div`);
    productCard.innerHTML +=     `<img src='${car.photo}'>
                                <h3>Brand: ${car.brand}</h3>
                                <h4>Model: ${car.model}</h4>
                                <p>Year: ${car.year}</p>
                                <b>${car.price} USD</b>
                                <br><button id="button${car.id}">Buy!</button>`;
    products.append(productCard);

    const button = document.getElementById(`button${car.id}`);
    button.addEventListener("click", ()=>{
        alert(`Added to cart! ${car.brand}`)
    });
}

let newsletter = document.getElementById("newsletterContainer");
newsletter.addEventListener("submit", sendSus);
    
function sendSus(e){
    e.preventDefault();
    // console.log(e.target.children[0].value);
    // console.log(e.target.children[1].value);
    if(!e.target.children[0].value.includes(`@`)){
        alert("Subscribed!")
}
}







