import {Gobelet} from "./gobelet";
    

import {Joueur} from "./joueur";
    


export class Partie {

    public _joueur: Joueur[] = [];
    public _nbrTours: number;
    public gobelet: Gobelet;

    constructor(nbr_tours: number, nbr_des: number) {
        this._nbrTours = nbr_tours;
        this.gobelet = new Gobelet(2);

    }
// Ajout de joueurs
    initialiser(tabjoueur: Joueur[]) {

        tabjoueur.forEach((e) => {
            this._joueur.push(e);
            console.log(tabjoueur);
        });

    }
    lancer(nbr_Tours: number) {
        for (let i = 0; i < nbr_Tours; i++) {
            this._joueur.forEach((joueur) => {
                joueur.jouerGobelet(this.gobelet);
                joueur.afficheScore();
            });
        }
        this.afficherGagnant();
        console.log("nbr de tours: " + this._nbrTours);
    }

    afficherGagnant() {

        /* Comparer les scores des joueurs et rendre le score le plus élevé. */
        let gagnant = this._joueur[0];
        this._joueur.forEach((e) => {
            if (e.get_score() >= gagnant.get_score()) {
                gagnant = e;
            }
        });

        console.log(this._joueur);
        // affiche le nom du gagnant
        console.log("Le gagnant est" + gagnant.nom);

    }


}