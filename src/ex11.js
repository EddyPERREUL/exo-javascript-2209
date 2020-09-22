//Ecrivez une fonction makeUnique qui prend comme paramètre une liste et enlève tous les doublons, et retourne cette liste classée par ordre croissant.

//makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7]


const makeUnique = (number) => {
    //callback parcours le tableau en prenant les éléments et leurs positions, si celui est égale  alors la méthode indexOf renvoi une valeur null, donc non égale à index qui a une valeur true
    const callback = (el, index, array) => {
        return array.indexOf(el) === index
    }
    const filterArray = number.filter(callback)
    return filterArray.sort()
}

console.log (
    makeUnique([1, 2, 7, 1, 3, 2, 4, 5, 7, 5, 1])
)