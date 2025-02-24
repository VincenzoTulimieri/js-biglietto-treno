// acquisizione dei dati
let age= prompt ('Inserisci la tua età');
let numberKilo = prompt ('Inserisci il kilometraggio');
let priceUnder =

// conversione da stringa a numero
age = parseInt(age);
numberKilo = parseInt(numberKilo);


// calcolo prezzo in base al km
let price = numberKilo * 0.21;
// calcolo sconto
if (age<18){
    priceUnder = ((price * 20) /100);
}else if (age>65){
    priceUnder = ((price * 40) /100);
} else{
    priceUnder = 0;
}

price = price - priceUnder
price = price.toFixed(2)

// formattazione del prezzo
console.log(price)
console.log(`il prezzo del tuo biglietto è ${price} €`)
