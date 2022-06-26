"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const dee_1 = require("./dee");
// le gobelet hérite des dés
class Gobelet {
    constructor(nbr_des) {
        this._tabDee = [];
        this._valeurlancergobelet = 0;
        for (let i = 0; i < nbr_des; i++) {
            this._tabDee.push(new dee_1.DEE());
        }
    }
    getValeur() {
        return this._valeurlancergobelet;
    }
    lancer() {
        this._valeurlancergobelet = 0;
        /*  */
        for (let i = 0; i < this._tabDee.length; i++) {
            this._tabDee[i].lancer();
            console.log('valeur tableau' + this._tabDee[i].get_value());
            this._valeurlancergobelet += this._tabDee[i].get_value();
        }
    }
    afficheScore() {
        //this._tabDee[i].get_value()
    }
}
exports.Gobelet = Gobelet;
