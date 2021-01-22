/*
SPIEGAZIONE MAP
let lista = [1, 2, 5, 8, 10]
let newArray = lista.map( (a, b, c) => {
    console.log(a, b, c)
    return a+1
})

//equivale a 

for (let i = 0; i<lista.length; i++){
    console.log(lista[i], i , lista)
    newArray.push(lista[i]+1)
}




#SPIEGAZIONE  FOR EACH
let lista = [1, 2, 5, 8, 10]

let a = lista.forEach( (a, b, c) => {
    console.log(a, b, c)
    })



for (let i = 0; i<lista.length; i++){
    console.log(lista[i], i , lista)
}



#SPIEGAZIONE FILTER
let lista = [1, 2, 5, 8, 10]

let newArray = lista
    .filter( e => e>5)
    .map( e => e+2)
//equivale
let newArray = []

for (let i = 0; i<lista.length; i++){
    if (lista[i]>5){
        newArray.push(lista[i]+2)
    }
}




#SPIEGAZIONE REDUCE
let lista = [6, 2, 5, 8, 10]
let newArray = lista
    .filter(e => e>3)
    .reduce( (acc, e, i, arr) => {
        console.log(acc, e, i, arr)
        return (acc+e)*2
    }, 0)
console.log(newArray)

//equivale a
let lista = [6, 2, 5, 8, 10]
let newArray = []
for (let i = 0; i<lista.length; i++){
    if (lista[i]>3){
        newArray.push(lista[i])
    }
}
let accumulatore = 0
for (let i = 0; i<newArray.length; i++){
    accumulatore = (accumulatore+newArray[i])*2
}
console.log(accumulatore)





#SPIEGAZIONE FOR LET VARIABILE OF LISTA
let lista = [1, 2, 5, 8, 10]
let sum = 0
for (let e of lista){
    console.log(e)
}
*/