import {
    Gobelet
} from "./gobelet";

export class Joueur {
    private _nom: string;
    private _score: number;

    constructor(nom: string) {
        this._nom = nom;
        this._score = 0;


    }

    get nom(): string {
        return this._nom
    }

    set nom(value: string) {
        value = this._nom
    }

    get score() {
        return this._score

    }

    set score(value: number) {
        value = this._score
    }

    get_nom() {
        return this._nom
    }

    get_score() {

        return this._score
    }

    jouerGobelet(gobelet: Gobelet): void {

        gobelet.lancer();
        let score = gobelet.getValeur()
        this._score += score;
    }

    afficheScore() {
        console.log("Score :" + this.nom + this._score);

    }

}