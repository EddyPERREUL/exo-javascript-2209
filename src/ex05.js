//Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui affiche sur le terminal comme suit:

const showStars = (nbStars) => {
    for ( let e = '*' ; e.length <= nbStars ; e += '*') {
        console.log(e)
    }
}


showStars(5)
showStars(10)
showStars(5)
showStars(10)
showStars(2)
showStars(2)
showStars(2)
showStars(2)
