// for (let i = 1; i <= 10; i++) {
//     let nombreDeUsuario = prompt("Ingrese nombre de usuario.");
//     let mensaje = `Bienvenido ${nombreDeUsuario} eres el Usuario: ${i}!`;
//     document.write(`${nombreDeUsuario} Usuario ${i}` + "<br>");
//     alert(mensaje);
// }


// const suma =  (a, b) => { return a + b}
// const resta = (a, b) => { return a - b}

// const iva = x => x* 0.21
// let precioAuto = 1000
// let descuento = 50

// let nuevoPrecio = resta(suma(precioAuto, iva(precioAuto)), descuento)
// console.log(nuevoPrecio)

// if(nuevoPrecio >= 1000 && nuevoPrecio < 2000){
//     console.log("honda toyota")
// }else if(nuevoPrecio >= 2000 && nuevoPrecio < 6000)
// {
//     console.log("volkswagen");
// }

// function Cars(brand, model, year){
//     this.brand=brand;
//     this.model=model;
//     this.year=year;
// }

// const car1 = new Cars("Toyota","Supra", 1999);
// const car2 = new Cars("Mazda","Miata", 1998);
// console.log(car1);
// console.log(car2);

// class Car{
//     constructor(brand, model, year, price, img){
//         this.brand = brand;
//         this.model = model;
//         this.year = year
//         this.price = price;
//         this.sold = false;
// }

// sell(){
//     this.sold = true;
// }
// }

// const car1 = new Car("Toyota", "Supra", 1999, 3500);
// console.log(car1);

// const cars = [
//     {brand: "Toyota", model:"Supra", year:1999, price: 28000},
//     {brand: "Mazda", model:"Miata Mx", year:1998, price: 21000},
//     {brand: "Nissan", model:"GT-R Skyline", year:1999, price: 48000},
//     {brand: "Subaru", model:"Impreza", year:2003, price: 34000},
// ];

// for(const car of cars){
//     console.log(car.brand)
// }



class Car{
    constructor(brand, model, year, price){
        this.brand = brand;
        this.model = model;
        this.year = year
        this.price = price;
        this.sold = false;
}

    sell(){
        this.sold = true;
    }
}

let cars = [];

cars.push(new Car("Toyota", "Supra", 1999, 28000));
cars.push(new Car("Mazda", "Miata Mx", 1998, 21000));
cars.push(new Car("Nissan", "GT-R Skyline", 1999, 48000));
cars.push(new Car("Subaru", "Impreza", 2003, 34000))

for(const product of cars){
    if(product.brand === "Mazda"){
        product.sell()
    }
}

console.log(cars);


const allCars = ["Toyota", "Mazda", "Nissan", "Subaru"];

const soldCars = (brand) => {
    let index = allCars.indexOf(brand);

    if(index != -1){
        allCars.splice(index, 1);
    }

    console.log(allCars)
}

soldCars("Mazda")