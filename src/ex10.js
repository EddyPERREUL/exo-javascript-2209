"use strict"

//Ecrivez une fonction sortAscend qui prend comme paramètre une liste et classe cette list par ordre croissant.
//sortAscend([99, 100, 101, 1]) 
// returns [1, 99, 100, 101]

const sortAscend = (array) => {
    //La fonction "trie" permet de comparer les valeurs entre elles
    const trie = ( a, b) => {
        return a - b
    }
    // Retourne l'array trié en s'aidant de la comparaison de la const "trie"
    return array.sort(trie)
}

console.log(
    sortAscend([99, 100, 101, 1, 131])
    )


