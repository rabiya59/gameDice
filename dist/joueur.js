"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this._nom = nom;
        this._score = 0;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        value = this._nom;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        value = this._score;
    }
    get_nom() {
        return this._nom;
    }
    get_score() {
        return this._score;
    }
    jouerGobelet(gobelet) {
        gobelet.lancer();
        let score = gobelet.getValeur();
        this._score += score;
    }
    afficheScore() {
        console.log("Score :" + this.nom + this._score);
    }
}
exports.Joueur = Joueur;
