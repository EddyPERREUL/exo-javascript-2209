//En partant de l'exercice 06 ecrivez une fonction calc qui prend 3 paramètres: 1 string qui correspondra à l'opérateur arithmétique et 2 nombres sur lesquels on appliquera l'opérateur. La fonction calc devra utiliser les fonctions définies dans l'exercice précédent.

//la fonction doit additioner
function add(nb, nb1) {
    return nb + nb1
}
//la fonction doit soustraire
function sub(nb, nb1) {
    return nb - nb1
}
//la fonction doit multiplier
function mul(nb, nb1) {
    return nb * nb1
}
//la fonction doit diviser
function div(nb, nb1) {
    return nb / nb1
}

//fonction qui calcul ( opérateur, nombre 1, nombre 2)
function calc (op, a, b) {
    switch (op) {
        case '+' :
            return add(a,b)
            break
        case '-' :
            return sub(a,b)
            break
        case '*' :
            return mul(a,b)
            break
        case '/' :
            return div(a,b)  
            break  
    }
}


let nb1 = calc('+', 10, 11) // nb1 === 21
let nb2 = calc('-', 6, 4) // nb2 === 2
let nb3 = calc('*', 4, 5) // nb3 === 20
let nb4 = calc('/', 10, 2) // nb4 == 5

console.log("nb1",nb1)
console.log("nb2",nb2)
console.log("nb3",nb3)
console.log("nb4",nb4)


