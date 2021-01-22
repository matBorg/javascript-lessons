"use strict"
function inserisciIntero(stringa, min, max){
    let a = parseInt(min)
    let b = parseInt(max)
    let c
    do {
       c = prompt("Inserisci "+ stringa+", il numero deve essere compreso tra "+min+" e "+max)
    } while (c<min || c>max)
    console.log("Inserito "+c+" con successo")
    return parseInt(c)
}

let N = inserisciIntero("N", 0, +Infinity)
let min = inserisciIntero("minimo", -Infinity, +Infinity)
let max = inserisciIntero("massimo", min, +Infinity)
let valori = []
let pari = 0
let m = (min+max)/2
let somma = 0
let n = 0
for (let i = 0; i<N; i++){
    valori.push(inserisciIntero("numero", min, max))
}
for (let i = 0; i<valori.length; i++){
    if ((valori[i]%2)===0){
        pari++
    }
}
alert("Ci sono "+pari+" numeri pari")
for (let i = 0; i<valori.length; i++){
    if (valori[i]>m){
        somma += valori[i]
        n++        
    }
}
let media = somma/n
alert("La media dei valori maggiori di "+m+" è "+media)