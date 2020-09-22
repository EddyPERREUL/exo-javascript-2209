"use strict"

//Ecrivez 4 fonctions add, sub, mul, div qui prennent 2 nombres en paramètres et qui retournent le resultat de l'operation attendue.

//la fonction doit additioner
const add = (nb, nb1) => {
    return nb + nb1
}
//la fonction doit soustraire
const sub = (nb, nb1) => {
    return nb - nb1
}
//la fonction doit multiplier
const mul = (nb, nb1) => {
    return nb * nb1
}
//la fonction doit diviser
const div = (nb, nb1) => {
    return nb / nb1
}

let nb1 = add(10, 11) // nb1 === 21
let nb2 = sub(6, 4) // nb2 === 2
let nb3 = mul(4, 5) // nb3 === 20
let nb4 = div(10, 2) // nb4 === 5

console.log("nb1",nb1)
console.log("nb2",nb2)
console.log("nb3",nb3)
console.log("nb4",nb4)