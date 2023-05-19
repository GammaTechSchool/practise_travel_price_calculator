import { getInsurancePrice, getFlightPrice, getHotelPrice, getCarPrice } from "./utilities/functions.js"

const span = document.querySelector('.total')
const form = document.querySelector('.form')

/* Hemos hecho un programa para calcular el precio total de un paquete de viajes, pero se ha borrado el
archivo donde estaban definidas. 
El archivo esta dentro de ./utilities/functions.js
*/



const handleSubmit = (e) => {
    e.preventDefault()

//  Este es el objeto que reciben todas las funciones por parámetros:
   
    const data = {
        city: e.target.city.value,
        days: e.target.days.value,
        car: e.target.car.value,
        insurance: e.target.insurance.value,
    }


//  Estas variables guardan los resultados de las funciones:
    
    const hotelPrice = getHotelPrice(data);
    const carPrice = getCarPrice(data);
    const insurancePrice = getInsurancePrice(data);
    const flightPrice = getFlightPrice(data);
    
    span.innerText = `${hotelPrice + carPrice + insurancePrice + flightPrice}€`;

 



}

form.addEventListener('submit', handleSubmit)







