const priceForKilometer = 0.21;
let numberOfKilometres = AskAndCheckToUser("Quanti chilometri devi percorrere?", true);
let ageOfPassenger = AskAndCheckToUser("Quanti anni hai?", true);
let price = CalculatePrice(numberOfKilometres, priceForKilometer, ageOfPassenger);

function AskAndCheckToUser(question, isNumber) {
    let noError = false;
    let tmp;
    while (!noError) {
        tmp = prompt(question);
        if (!tmp)
            alert("Il valore inserito è vuoto!");
        else if (isNumber && isNaN(tmp))
            alert("Il valore inserito deve essere un numero!");
        else if (isNumber && !isNaN(tmp) && parseInt(tmp) <= 0)
            alert("Il valore inserito deve essere maggiore di 0!");
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