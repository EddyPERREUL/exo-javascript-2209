//En partant de l'exercice 06 ecrivez une fonction calc qui prend 3 paramètres: 1 string qui correspondra à l'opérateur arithmétique et 2 nombres sur lesquels on appliquera l'opérateur. La fonction calc devra utiliser les fonctions définies dans l'exercice précédent.

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
//fonction qui calcul ( opérateur, nombre 1, nombre 2)
const calc = (op, a, b) => {
    switch (op) {
        case '+' :
            return add(a,b)
            //break, n'est plus necessaire dans une fonction
        case '-' :
            return sub(a,b)
        case '*' :
            return mul(a,b)
        case '/' :
            return div(a,b)  
    // ci-dessous une condition par defaut en cas d'oublie de l'opérateur 
        default: 
            console.log("Error: Unknown operator")
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


