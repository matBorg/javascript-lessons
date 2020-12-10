"use strict"
let n
let e
do {
    n = +prompt("Inserisci il numero di valori da immettere")
} while (n<=0)
let massimo = 0
let media
let somma_negativi = 0
let lista = []
let somma = 0
if (n !== 0) {
    for (let i = 0; i < n; i++) {
        do {
            e = parseInt(prompt("Inserisci l'elemento "+ i))
        } while (e<-50 && e>50)
        lista.push(e)
    }
    for (let i = 0; i < n; i++) {
        somma += parseInt(lista[i])
    }
    
    media = somma/n
    let temp = parseInt(lista[0])
    for (let i = 1; i< n; i++){
        if (lista[i]>temp)
            temp = parseInt(lista[i])
    }
    massimo = temp
    for (let i = 0; i < n; i++) {
        if (lista[i]<0)
            somma_negativi += parseInt(lista[i])
    }
    alert("Il numero massimo è: "+massimo)
    alert("La media è: "+media)
    alert("La somma dei negativi vale: "+somma_negativi)
}