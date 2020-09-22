//Ecrivez une fonction isPalindrome qui prend une string en paramètre. Cette fonction retourne true si le paramètre est un palindrome sinon retourne false

// la fonction isPalindrome à comme paramètre un string
// Si tenet à l'envers est égale tenet alors true

const isPalindrome = (string) => {
    /* Sur plusieurs lignes*/

    //let splitString = string.split("")
    //let reverseString = splitString.reverse()
    //let joinString = reverseString.join("")
    //return  joinString == string 

    /* Sur une ligne */
    return string.split("").reverse().join("") == string    
}


//resultat demandé
isPalindrome('tenet') // returns true
isPalindrome('Alyra') // returns false

console.log(isPalindrome('tenet'))
// Alyra renvoie false car il y a une majuscule. il faudrait que je force le lowercase pour que la valeur soit true
console.log(isPalindrome('Alyra'))
console.log(isPalindrome("tabetetebat"))