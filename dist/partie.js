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
    lancer(nbr_des) {
    }
    afficherGagnant() { }
}
exports.Partie = Partie;
