const priceForKilometer = 0.21;
let numberOfKilometres = AskAndCheckToUser("Quanti chilometri devi percorrere?", true);
let ageOfPassenger = AskAndCheckToUser("Quanti anni hai?", true);
let price = CalculatePrice(numberOfKilometres, priceForKilometer, ageOfPassenger);

function AskAndCheckToUser(question) {
    let noError = false;
    let tmp;
    while (!noError) {
        tmp = prompt(question);
        if (!tmp)
            alert("Il valore inserito è vuoto!");
        else
            noError = true;
    }
    return tmp;
}

function CalculatePrice(numKm, priceKm, age) {
    let price = numKm * priceKm;
    if (age < 18) {
        price = price - (price * 20) / 100;
    } else if (age > 65) {
        price = price - (price * 40) / 100;
    }
    price = price.toFixed(2);
    return price;
}

document.getElementById("inputPrice").value = price;