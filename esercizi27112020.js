function inserisciIntero(stringa, min, max){
    let a = parseInt(min)
    let b = parseInt(max)
    let c
    do {
       c = prompt("Inserisci "+ stringa+", il numero deve essere compreso tra "+min+" e "+max)
    } while (c<min && c>max)
    console.log("Inserito "+c+" con successo")
    return parseInt(c)
}

function inserisciIntero(stringa, min, max){
    let a = parseInt(min)
    let b = parseInt(max)
    let c
    do {
       c = prompt("Inserisci "+ stringa+", il numero deve essere compreso tra "+min+" e "+max)
    } while (c<min && c>max)
    console.log("Inserito "+c+" con successo")
    return parseInt(c)
}
function delta(){
    do {
        a = inserisciIntero("a", -Infinity, +Infinity)
    } while ( a === 0 )

    b = inserisciIntero("b", -Infinity, +Infinity)
    c = inserisciIntero("c", -Infinity, +Infinity)
    delta = Math.pow(b, 2) - 4*a*c
    if (delta<0){
        alert("Non esistono soluzioni nell'insieme dei numeri reali")
    }
    else {
        alert("Il delta vale: " + delta)
        return delta 
    
    }
}
function soluzione(){
    Delta = delta()
    do {
        a = inserisciIntero("a", -Infinity, +Infinity)
    } while ( a === 0 )
    b = inserisciIntero("b", -Infinity, +Infinity)
    x1 = (-b+Math.sqrt(Delta))/(2*a)
    x2 = (-b-Math.sqrt(Delta))/(2*a)
    alert("X1 = "+x1+ ", X2 = "+x2)
}

function maggiore(a, b){
    if (a>b){
        console.log("Il valore maggiore tra "+a+" e "+b+" è "+a)
        return a
    } else {
        console.log("Il valore maggiore tra "+a+" e "+b+" è "+b)
        return b
    }
}

function minore(a, b){
    if (maggiore(a, b)===a){
        console.log("Il valore minore tra "+a+" e "+b+" è "+b)
        return b
    } else {
        console.log("Il valore minore tra "+a+" e "+b+" è "+a)
        return a
    }
}
function sommaValoriDaAaB(a, b){
    let somma = 0
    while (a<=b){
        somma = somma + a
        a += 1
    }
    console.log("La somma di a = a+1 fino a b è "+somma)
    return somma
}
function prodottoValoriDaAaBPari(a, b){
    let prodotto = 1
    for (let i = a; i<b; i++){
        if (i===0){
            i+=1
        }
        if ((i%2)===0){
            prodotto = prodotto*i
        }
    }
    console.log("Il prodotto di a = a*(a+1) dei numeri pari fino a b è "+prodotto)
    return prodotto
}
function multipli(a, b, k){
    let multipli = []
    for (let i = a; i<b; i++){
        if ((i%k)===0){
            multipli.push(i)
        }
    }
    console.log("I multipli di "+k+" compresi tra "+a+" e "+b+" sono: "+multipli)
    return multipli
}