const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCart = document.getElementById('template-cart').content
const fragment = document.createDocumentFragment()
let cart = {}

document.addEventListener('DOMContentLoaded',() => {
    fetchData()
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
        renderCart()
    }
})
cards.addEventListener('click', e => {
    addCart(e)
})
items.addEventListener('click', e => {
    btnAction(e)
})
const fetchData = async () => {
    try{
        const res = await fetch('books.json')
        const data = await res.json()
        renderCards(data)
    }catch (error){
        console.log(error)
    }
}

const renderCards = data =>{
    data.forEach(book => {
        templateCard.querySelector('h5').textContent = book.title
        templateCard.querySelector('h6').textContent = book.editorial
        templateCard.querySelector('.price').textContent = book.price
        templateCard.querySelector('img').setAttribute("src", book.photo)
        templateCard.querySelector('.btn-primary').dataset.id = book.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    cards.appendChild(fragment)
}
const addCart = e =>{
    if(e.target.classList.contains('btn-primary')){
        setCart(e.target.parentElement)
        Swal.fire({
            color: 'white',
            background: '#4545f8',
            position: 'bottom-end',
            icon: 'success',
            title: 'Added to cart!',
            showConfirmButton: false,
            timer: 1500
            })
    }
    e.stopPropagation()
}

const setCart = object =>{
    const product = {
        id: object.querySelector('.btn-primary').dataset.id,
        title: object.querySelector('h5').textContent,
        editorial: object.querySelector('h6').textContent,
        price: object.querySelector('.price').textContent,
        quantity: 1
    }
    if(cart.hasOwnProperty(product.id)){
        product.quantity = cart[product.id].quantity + 1
    }
    cart[product.id] = {...product}
    renderCart()
}
const renderCart = () =>{
    items.innerHTML = ''
    Object.values(cart).forEach(product =>{
        templateCart.querySelector('th').textContent = product.id
        templateCart.querySelectorAll('td')[0].textContent =product.title
        templateCart.querySelectorAll('td')[1].textContent = product.quantity
        templateCart.querySelector('.btn-info').dataset.id = product.id
        templateCart.querySelector('.btn-danger').dataset.id = product.id
        templateCart.querySelector('span').textContent = product.quantity * product.price

        const clone = templateCart.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    
    renderFooter()

    localStorage.setItem('cart', JSON.stringify(cart))
}

const renderFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(cart).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Your cart is empty - start buying!</th>
        `
        return
    }
    const nQuantity = Object.values(cart).reduce((acc, {quantity})=> acc + quantity, 0)
    const nPrice = Object.values(cart).reduce((acc, {quantity, price}) => acc + quantity * price, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nQuantity
    templateFooter.querySelector('span').textContent = nPrice

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnClean = document.getElementById('clean-cart')
    btnClean.addEventListener('click', () =>{
        cart = {}
        renderCart()
    })
}
const btnAction = e =>{
    if(e.target.classList.contains('btn-info')){
        const product = cart[e.target.dataset.id]
        product.quantity++
        cart[e.target.dataset.id] = { ...product }
        renderCart()
    }

    if(e.target.classList.contains('btn-danger')){
        const product = cart[e.target.dataset.id]
        product.quantity--
        if(product.quantity === 0){
            delete cart[e.target.dataset.id]
        }
        renderCart()
    }
    e.stopPropagation()
}


// Newsletter s
function sendSus(e){
    e.preventDefault();
    newsletter = e.target.children[1].value.includes(`@`)
    Swal.fire({
        title: 'Subscribed! ',
        text: 'thanks for subscribing.',
    })
};

let newsletter = document.getElementById("form");
newsletter.addEventListener(`submit`, sendSus);