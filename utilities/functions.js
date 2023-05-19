/*
Tu tarea es rellenar la información necesaria para que la web funcione y calcule el precio correcto.
*/

/*  1. La función "getInsurancePrice" debe evaluar si la propiedad "insurance" es "true". 
En ese caso, debe retornar "30", que se sumará a los otros valores de demás funciones; en caso contrario, retornará 0 */

function getInsurancePrice() {
}


/* 2. -  La función "getCarPrice" debe evaluar si la propiedad "car" es "true". En caso de que sea así, retornará el precio total del alquiler del coche,
que tendrá las siguientes condiciones:

    - Si la ciudad escogida, que viene en la propiedad "city", es "Madrid" o "Barcelona", el precio del coche
        será de 50€ por día
    - Si la ciudad es "Valencia", el precio por día del coche sera de 45€
    - Si la ciudad es "Sevilla" o "Bilbao", el precio por día será de 30€
    
        
*/

function getCarPrice() {
}



/* 3.- La función "getFlightPrice" debe evaluar qué ciudad ha escogido el usuario, y retornar un precio del vuelo
siguiendo las siguientes condiciones :
    - El precio del vuelo para Madrid o Barcelona es de 80€
    - El precio del vuelo para Valencia es de 70€
    - El precio del vuelo para Bilbao y Sevilla es de 60€*/



function getFlightPrice() {
}



/* 4.- La función "getHotelPrice" debe evaluar el número de noches de hotel seleccionadas por el cliente. 
El precio fijo diario es de 50€ por noche, pero el hotel ofrece una serie de descuentos:
    - Si el cliente reserva más de 7 noches, se le ofrecerá un 20% de descuento sobre el precio total
    - Si el cliente reserva un mínimo de 3 noches, se le ofrecerá un 10% de descuento, no acumulable con el anterior
*/



function getHotelPrice() {
}


export {
    getInsurancePrice,
    getCarPrice,
    getFlightPrice,
    getHotelPrice

}