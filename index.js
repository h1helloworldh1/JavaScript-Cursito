import{ cars } from "./stock.js"

// Header & NavBar s
let headerContainer = document.getElementById("headerContainer");
let navBar = document.createElement(`nav`);
navBar.innerHTML += `<div class="navBarLogo">
                        <h1 href="#">Amazon<span>Cars</span></h1>
                    </div>
                    <div id="navBarSearch">
                        <input id="inputSearch" type="text" placeholder=" Search"></input>
                    </div>
                    <div class="navBar">
                        <ul>
                            <li>About Us.</li>
                            <li>Cars.</li>
                            <li>Contact.</li>
                        </ul>
                    </div>`
                    ;
headerContainer.append(navBar);
// Header & NavBar e

// Cards & Cart s
let products = document.getElementById("productsContainer");
// let cart = []
for(const car of cars){
    let productCard = document.createElement(`div`); 
    productCard.className = `card`
    productCard.innerHTML +=   `<div class="cardPhoto" style="background-image:url(${car.photo});" ></div>
                                <div class="cardInfo"><h3>Brand: ${car.brand}</h3>
                                <h4>Model: ${car.model}</h4>
                                <p>Year: ${car.year}</p>
                                <b>${car.price} USD</b>
                                <br><button id="button${car.id}">Buy!</button></div>`;
                                
    products.append(productCard);
    
    const button = document.getElementById(`button${car.id}`);
    button.addEventListener("click", ()=>{
        // cart.push()
        let cart = document.getElementById("cartContainer");
        let showCart = document.createElement('div');
        showCart.innerHTML += `<img class="cardInCart" src="${car.photo}"><h5>${car.brand} ${car.model} $ ${car.price}</h5>`;
        cart.append(showCart);
        localStorage.setItem(car.id, JSON.stringify(showCart.innerHTML));
        Swal.fire({
            color: 'white',
            background: '#4545f8',
            position: 'bottom-end',
            icon: 'success',
            title: 'Added to cart!',
            showConfirmButton: false,
            timer: 1500
        })
    });
    let showMeCart = JSON.parse(localStorage.getItem(car.id));
    if(showMeCart){
        let cart = document.getElementById("cartContainer");
        let showCart = document.createElement('div');
        showCart.innerHTML += `<img class="cardInCart" src="${car.photo}"><h5>${car.brand} ${car.model} $ ${car.price}</h5>`;
        cart.append(showCart)
    }
};
// Cards & Cart e

// Newsletter s
let newsletter = document.querySelector("form");
newsletter.addEventListener(`submit`, sendSus)
// let emails = []
function sendSus(e){
    newsletter = e.target.children[1].value.includes(`@`) && Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
    // let values = document.getElementById("email").value;
    // values = e.target.children[1].value.includes(`@`) ? emails.push(values): false
    // localStorage.setItem("Emails", JSON.stringify(...emails))
};
// Newsletter e

// const searchItem = document.getElementById("inputSearch");
// const itemsCardContainer = document.getElementsByClassName("cardInfo")

// searchItem.addEventListener("input",(e) =>{
//     const value = e.target.value
//     console.log(value);
// })

