"Use strict"
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let inserisciPari = () => {
    let num 
    do {
        num = prompt("Inserisci numero pari")
    } while ((num%2) !== 0)
    return num
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
function divisori(MIN, MAX){
    let k = inserisciIntero("K", MIN, MAX)
    let lista_divisori = []
    for (let i = k; i>0; i--){
        if ((k%i)===0){
            lista_divisori.push(i)
        }
    }
    alert(lista_divisori)
    return lista_divisori
}


function isPrimo(MIN, MAX){
    Divisori = divisori(MIN, MAX)
    if (Divisori.lenght === 2 && divisori[1] === 1){
        return true
    } else {
        return false
    }
}

function moda(){
    let voti = []
    let Moda = 0
    let temp
    let n 
    //0 c'è sempre una sola volta da definizione
    voti.push(1)
    for (let i = 1; i<10; i++){
        voti[i] = 0
    }
    do {
        n = inserisciIntero("Inserisci il voto numero", 0, 10)
        voti[n-1] = voti[n-1]+1
    } while (n!==0)
    temp = voti[0]
    for (let i = 1; i<voti.length;i++){
        if (temp<voti[i]){
            temp = voti[i]
            Moda = i+1
        }
    }
    return Moda
    
}
function indovinaNumero(){
    let num = getRandomInt(0, 1000)
    console.log(num)
    let numero
    let loop = true
    do {
        numero = +prompt("inserisci numero")
        if (numero<num){
            alert("Il numero coretto è maggiore")
        } 
        else if (numero>num){
            alert("Il numero corretto è minore")
        } else {
            alert("Hai indovinato!")
            loop = false
        }
    } while (loop === true)
}
