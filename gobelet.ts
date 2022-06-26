import {
    DEE
} from "./dee";

// le gobelet hérite des dés
export class Gobelet {

    public _valeurlancergobelet: number;
    public _tabDee: DEE[] = [];

    constructor(nbr_des: number) {
        this._valeurlancergobelet = 0;

        for (let i = 0; i < nbr_des; i++) {
            this._tabDee.push(new DEE());
        }

    }

    getValeur() {
        return this._valeurlancergobelet

    }

    lancer() {
        this._valeurlancergobelet = 0;


        /*  */
        for (let i = 0; i < this._tabDee.length; i++) {

            this._tabDee[i].lancer()

            console.log('valeur tableau' + this._tabDee[i].get_value());
            this._valeurlancergobelet += this._tabDee[i].get_value()
        }
    }

    afficheScore() {
        //this._tabDee[i].get_value()


    }


}