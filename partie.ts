import {
    Gobelet
} from "./gobelet";
import {
    Joueur
} from "./joueur";

export class Partie {

    public _joueur: Joueur[] = [];
    public _nbrTours: number;
    public gobelet: Gobelet;

    constructor(nbr_tours: number, nbr_des: number) {
        this._nbrTours = nbr_tours;
        this.gobelet = new Gobelet(2);

    }

    initialiser(tabjoueur: Joueur[]) {

        tabjoueur.forEach((e) => {
            this._joueur.push(e); console.log(tabjoueur);
        });
       
        
    }
    lancer(nbr_des : number){



    }

    afficherGagnant(){}


}