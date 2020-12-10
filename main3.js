"use strict"
let a 
let b
let c
let delta
let x1
let x2
do {
    a = prompt("Inserisci a")
} while ( a === 0 )

b = prompt("Inserisci b")
c = prompt("Inserisci c")
delta = Math.pow(b, 2) - 4*a*c

if (delta<0){
    alert("Non esistono soluzioni nell'insieme dei numeri reali")
}
else {
    alert("Il delta vale: " + delta)
    x1 = (-b+Math.sqrt(delta))/(2*a)
    x2 = (-b-Math.sqrt(delta))/(2*a)
    alert("X1 = "+x1+ ", X2 = "+x2)
}
