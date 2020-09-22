"use strict"

/* 
un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage.
Les roues sont toutes montées sur des véhicules de types:
monocyle: 1 roue
moto: 2 roues
voiture: 4 roues
limousine: 6 roues

Ecrivez une fonction countWheels qui prend 4 parmètres, qui correspondent au nombre de chaques véhicules et qui retourne le nombre de roues totales:

countWheels(10, 20, 7, 2) //returns 90
countWheels(2, 3, 4, 5) // returns 54

les arguments de la fonction doivent être passés dans l'ordre suivant:

countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine)
*/

//nombre de roue par véhicule
const monocyle = 1
const moto = 2
const voiture = 4
const limousine = 6

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
    // multiplication du nombre de véhicule et le nombre de roue
    const wheelsMono = nb_monocycle * monocyle;
    const wheelsMoto = nb_moto * moto;
    const wheelsVoiture = nb_voiture * voiture;
    const wheelslimousine = nb_limousine * limousine;

    // total du nombre de roue en additionnant les résultats des multiplications
    return( 
        wheelsMono + wheelsMoto + wheelsVoiture + wheelslimousine
    );
}

console.log(
    countWheels(10, 20, 7, 2),
    countWheels(2, 3, 4, 5)
    )