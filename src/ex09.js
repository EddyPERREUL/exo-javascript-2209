//Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
//biggest([99, 100, 101, 1]) // returns 101

const biggest = (rest) => {
    return Math.max(...rest)
}

console.log(
    "1er =", biggest([99, 100, 101, 1]),
    "2eme =", biggest([32, 48, 60, 70])
    )

