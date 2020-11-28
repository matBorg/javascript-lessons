"use strict"
let age
do {
    age = prompt("Quanti anni hai?")
} while (age <= 0 || age > 100)
if (age > 17) {
    alert("Bravo!! Sei maggiorenne")
} else {
    alert("Ohh no non puoi guidare la macchina, come mi dispiace...")
}