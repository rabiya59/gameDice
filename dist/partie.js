"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const gobelet_1 = require("./gobelet");
class Partie {
    constructor(nbr_tours, nbr_des) {
        this._joueur = [];
        this._nbrTours = nbr_tours;
        this.gobelet = new gobelet_1.Gobelet(2);
    }
    initialiser(tabjoueur) {
        tabjoueur.forEach((e) => {
            this._joueur.push(e);
            console.log(tabjoueur);
        });
    }
    lancer(nbr_Tours) {
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
exports.Partie = Partie;
