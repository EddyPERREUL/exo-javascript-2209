/*Ecrivez une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step. L'execution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step*/

// création fonction (count)

// un paramètre d'un nombre minimum (min)
// un paramètre d'un nombre maximum (max)
// un paramètre d'un nombre d'étape (step)

//l'affiche devrait être mis en place par = console.log(4,5)

const count = (min, max, step) => {
        for (let i = min ; i < max ; i += step){
            console.log(i)
    }
}

count(0, 20, 2)

