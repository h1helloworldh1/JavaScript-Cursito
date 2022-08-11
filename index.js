

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
let products = document.getElementById("productsContainer");``

fetch("./cars.json")
.then(response => response.json())
.then(cars => {
cars.forEach(car => {
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
});
})
    
// Cards & Cart e

// fetch s

// const arrivals = async() => {
//     const list = document.getElementById("newArrivals");

//     try{
//         const response = await fetch('');
//         const posts = await response.json();
//         console.log(response)
//         posts.forEach(post =>{
//             const li = document.createElement("li");
//             li.innerHTML = `
//             <h4>${post.MakeName}</h4>
//             <h5>${post.MakeId}</h5>
//             <p>${post.VehicleTypeName}</p>
//             `;
//             list.append(li);
//         })
//     }catch (error){
//         document.write("ERROR")
//     }
// }
// arrivals();

// fetch e

// Newsletter s

function sendSus(e){
    e.preventDefault();
    newsletter = e.target.children[1].value.includes(`@`)
    Swal.fire({
        title: 'Subscribed! ',
        text: 'thanks for subscribing!',
        imageUrl: './assets/sweetAlert.jpg',
        imageWidth: 350,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
};

let newsletter = document.getElementById("form");
newsletter.addEventListener(`submit`, sendSus);