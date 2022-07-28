import{ cars } from "./stock.js"
// Header & NavBar s
let headerContainer = document.getElementById("headerContainer");
let navBar = document.createElement(`nav`);
navBar.innerHTML += `<div class="navBarLogo">
                        <img src="">AmazonCars
                    </div>
                    <div id="navBarSearch">
                        <input type="search" placeholder="Search"></input>
                        <button class="searchButton">Search</button>
                    </div>
                    <div class="navBar">
                        <ul>
                            <li>About Us.</li>
                            <li>Cars.</li>
                            <li>Contact.</li>
                        <ul>
                    </div>`
                    ;
headerContainer.append(navBar);
// Header & NavBar e

// Cards & Cart s
let products = document.getElementById("productsContainer");

for(const car of cars){
    let productCard = document.createElement(`div`);
    productCard.innerHTML +=   `<img src='${car.photo}'>
                                <h3>Brand: ${car.brand}</h3>
                                <h4>Model: ${car.model}</h4>
                                <p>Year: ${car.year}</p>
                                <b>${car.price} USD</b>
                                <br><button id="button${car.id}">Buy!</button>`;
    products.append(productCard);

    const button = document.getElementById(`button${car.id}`);
    button.addEventListener("click", ()=>{
        let cart = document.getElementById("cartContainer");
        let showCart = document.createElement('div');
        showCart.innerHTML += `<h5>${car.brand} ${car.model} $ ${car.price}</h5>`;
        cart.append(showCart);
        localStorage.setItem(car.id, JSON.stringify(showCart.innerHTML));
        alert(`Added to cart! ${car.brand}`)
    });
    let showMeCart = localStorage.getItem(car.id)
    console.log(JSON.parse(showMeCart));
    if(showMeCart){
        let cart = document.getElementById("cartContainer");
        let showCart = document.createElement('div');
        showCart.innerHTML += `<h5>${car.brand} ${car.model} $ ${car.price}</h5>`;
        cart.append(showCart);
    }
};
// Cards & Cart e

// Newsletter s
let newsletter = document.querySelector("form");
newsletter.addEventListener(`submit`, sendSus)
function sendSus(e){
    e.preventDefault();
    console.log(e.target.children[1].value);
    if(e.target.children[1].value.includes(`@`)){
        alert("Subscribed!")
}
}
// Newsletter e

// newsletter.addEventListener(`submit`, sendSus);
// let input = document.getElementById('email')
// localStorage.setItem("email", JSON.stringify(input.value));
// if(localStorage){
//     alert('This email has been subscribed')
//     let email = localStorage.getItem("email")
//     console.log(JSON.parse(email))
// }

// const save = (key, value) => {localStorage.setItem(key, value);}

// for(const car of cars){
//     save(car.id, JSON.stringify(cars))
// }
// localStorage.setItem("cart", JSON.stringify(cars));

// let cart = localStorage.getItem("cart")
// console.log(JSON.parse(cart));